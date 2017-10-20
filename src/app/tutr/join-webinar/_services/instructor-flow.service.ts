import { Subscription, ReplaySubject, Subject } from 'rxjs';

import { Injectable, NgZone } from '@angular/core';

import { UserMediaService } from './user-media.service';
import { WebrtcSignalingService } from './webrtc-signaling.service';
import { PeerConnectionService } from './peer-connection.service';

import { ConnectionStatus } from '../_models/connection-status';
import { WebinarFlowService } from './webinar-flow.service';

@Injectable()
export class InstructorFlowService implements WebinarFlowService {
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

	private participants: any[] = [];

	constructor(private userMediaService: UserMediaService,
				private peerConnectionService: PeerConnectionService,
				private webrtcSignalingService: WebrtcSignalingService,
				private ngZone: NgZone) { 
	}

	handle(message: any) {
		let data = this.signalingData;

		switch(message.action) {
			case 'offer':
				const participant = {
					conn: this.peerConnectionService.createRTCPeerConnection(),
					id: message.from
				};

				participant.conn.addStream(this.userMediaService.stream);

				participant.conn.setRemoteDescription(new RTCSessionDescription(message.offer));

				participant.conn.onaddstream = (e) => {
					this.ngZone.run(() => {
						this.participantJoined.next(e.stream);
					});
				};

				participant.conn.onicecandidate = (event) => {
					if (event.candidate) {
						this.webrtcSignalingService.sendCandidate({
							...data,
							candidate: event.candidate,
							to: message.from
						});
					}
				}

				participant.conn.createAnswer((answer) => {
					console.log('answer', answer.sdp);
					participant.conn.setLocalDescription(answer);

					this.webrtcSignalingService.answer({
							...data,
							answer,
							to: message.from
						})
				}, (err) => {
					console.log(err);
				});

				this.participants.push(participant);

				break;
			case 'receiveCandidate':
				const existingparticipant = this.participants.find(p => p.id === message.from);
				existingparticipant.conn.addIceCandidate(new RTCIceCandidate(message.candidate));
				break;
		};	
	}

	public join(): Promise<any> {
		this.subscription = this.webrtcSignalingService.messages.subscribe((message: any) => {
			this.handle(message);
		});

		return this.webrtcSignalingService.start(this.signalingData).then(() => {
			this._status.isJoining = false;
			this._status.isJoined = true;
			this.status.next(this._status);
		});
	}

	public dispose() {
		this.subscription.unsubscribe();
	}

	public leave(): Promise<any> {
		return this.webrtcSignalingService.leave(this.signalingData).then(() => {
			this._status.reset();
			this.status.next(this._status);
		});
	}

}
