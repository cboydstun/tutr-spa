import { Subscription, ReplaySubject, Subject } from 'rxjs';

import { Injectable, NgZone } from '@angular/core';

import { UserMediaService } from './user-media.service';
import { WebrtcSignalingService } from './webrtc-signaling.service';
import { PeerConnectionService } from './peer-connection.service';

import { ConnectionStatus } from '../_models/connection-status';
import { BaseCallService } from './base-call.service';

@Injectable()
export class ParticipantCallService extends BaseCallService {

	public instructorJoined = new Subject<any>();

	protected localConnection;

	constructor(protected peerConnectionService: PeerConnectionService,
				protected ngZone: NgZone,
				webrtcSignalingService: WebrtcSignalingService,) { 
		super(webrtcSignalingService);
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
					this.localConnection.createOffer()
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



}
