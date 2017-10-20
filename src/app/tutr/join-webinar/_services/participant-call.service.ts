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
	}

	handle(message: any) {
		let data = this.signalingData;

		switch(message.action) {
			case 'receiveCandidate':
				this.localConnection.addIceCandidate(new RTCIceCandidate(message.candidate));
				break;
			case 'waitingForInstructor':
				this._status.isJoining = true;
				this._status.isJoined = false;
				this._status.waitingForInstructor = message.status;
				this.status.next(this._status);
				this.instructorJoined.next(null);
				break;
			case 'offer':
				this.localConnection = this.peerConnectionService.createRTCPeerConnection();

				this.localConnection.setRemoteDescription(new RTCSessionDescription(message.offer));

				this.localConnection.onaddstream = (e) => {
					this.ngZone.run(() => {
						this._status.isJoining = false;
						this._status.isJoined = true;
						this.status.next(this._status);
						this.instructorJoined.next(e.stream);
					});
				};

				this.localConnection.onicecandidate = (event) => {
					if (event.candidate) {
						this.webrtcSignalingService.sendCandidate({
							...data,
							candidate: event.candidate
						});
					}
				};

				this.localConnection.createAnswer().then((answer) => {
					this.localConnection.setLocalDescription(answer);

					this.webrtcSignalingService.answer({
						...data,
						answer
					});
				});

				break;
		};	
	}

	public disconnect() {
		this.localConnection.close();
		this.localConnection= null;
	}

}
