import { Subscription, ReplaySubject, Subject } from 'rxjs';

import { Injectable, NgZone } from '@angular/core';

import { UserMediaService } from './user-media.service';
import { WebrtcSignalingService } from './webrtc-signaling.service';
import { PeerConnectionService } from './peer-connection.service';

import { ConnectionStatus } from '../_models/connection-status';
import { BaseCallService } from './base-call.service';

@Injectable()
export class InstructorCallService extends BaseCallService {

	public participantJoined = new Subject<any>();

	protected participants: any[] = [];

	constructor(protected userMediaService: UserMediaService,
				protected peerConnectionService: PeerConnectionService,
				protected ngZone: NgZone,
				webrtcSignalingService: WebrtcSignalingService,) { 
		super(webrtcSignalingService);
	}

	public handle(message: any) {
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

}
