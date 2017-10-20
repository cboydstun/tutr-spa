import { Subscription, ReplaySubject, Subject } from 'rxjs';

import { Injectable, NgZone } from '@angular/core';

import { UserMediaService } from './user-media.service';
import { WebrtcSignalingService } from './webrtc-signaling.service';
import { PeerConnectionService } from './peer-connection.service';

import { ConnectionStatus } from '../_models/connection-status';
import { WebinarFlowService } from './webinar-flow.service';

@Injectable()
export class ParticipantFlowService implements WebinarFlowService {
	public status = new ReplaySubject<ConnectionStatus>();

	public participantJoined = new Subject<any>();
	public instructorJoined = new Subject<any>();

	private room: string;
	private id: string;
	public get signalingData() {
		return Object.assign({
			room: this.room,
			id: this.id,
		});
	}
	public setSignalingData(room, id) {
		this.room = room;
		this.id = id;
	}

	protected _status: ConnectionStatus = new ConnectionStatus();

	protected subscription: Subscription;

	private localConnection;

	constructor(private userMediaService: UserMediaService,
				private peerConnectionService: PeerConnectionService,
				private webrtcSignalingService: WebrtcSignalingService,
				private ngZone: NgZone) { 
		this.localConnection = this.peerConnectionService.createRTCPeerConnection();
	}

	handle(message: any) {
		let data = this.signalingData;

		switch(message.action) {
			case 'answer':
				this.localConnection.setRemoteDescription(new RTCSessionDescription(message.answer));
				break;
			case 'receiveCandidate':
				this.localConnection.addIceCandidate(new RTCIceCandidate(message.candidate));
				break;
			case 'waitingForInstructor':
				this._status.waitingForInstructor = message.status;
				this.status.next(this._status);

				if (!this._status.waitingForInstructor) {

					this.localConnection.addStream(this.userMediaService.stream);

					this.localConnection.createOffer(this.peerConnectionService.rtcOptions.mandatory)
						.then((offer) => {
							console.log('offer', offer.sdp);
							this.localConnection.setLocalDescription(offer);

							this.webrtcSignalingService.offer({
								...data,
								offer
							});
						}).catch((err) => {
							console.log(err);
						});

					this.localConnection.onaddstream = (e) => {
						this.ngZone.run(() => {
							this._status.isJoining = false;
							this._status.isJoined = true;

							this.status.next(this._status);

							this.instructorJoined.next(e.stream);
						});
					};

					this.localConnection.oniceconnectionstatechange = (e) => {
						console.log('iceConnectionState', this.localConnection.iceConnectionState);
					};

					this.localConnection.onicecandidate = (event) => {
						if (event.candidate) {
							this.webrtcSignalingService.sendCandidate({
								...data,
								candidate: event.candidate
							});
						}
					};
				}

				break;
		};	
	}

	public dispose() {
		this.subscription.unsubscribe();
	}

	public join(): Promise<any> {
		this.subscription = this.webrtcSignalingService.messages.subscribe((message: any) => {
			this.handle(message);
		});

		return this.webrtcSignalingService.join(this.signalingData).then(() => {
			this._status.isJoining = true;
			this.status.next(this._status);
		});
	}

	public leave(): Promise<any> {
		return this.webrtcSignalingService.leave(this.signalingData).then(() => {
			this._status.reset();
			this.status.next(this._status);
		});
	}

}
