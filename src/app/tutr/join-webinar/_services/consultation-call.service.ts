import { Subscription, Subject } from 'rxjs';

import { Injectable, NgZone } from '@angular/core';

import { UserMediaService } from './user-media.service';
import { WebrtcSignalingService } from './webrtc-signaling.service';
import { PeerConnectionService } from './peer-connection.service';

import { ConsultationBookingConnectionStatus } from '../_models/consultation-booking-connection-status';
import { BaseCallService } from './base-call.service';

@Injectable()
export class ConsultationCallService extends BaseCallService {
	protected localConnection;

	public otherJoined = new Subject<any>();

	constructor(protected userMediaService: UserMediaService,
				protected peerConnectionService: PeerConnectionService,
				protected ngZone: NgZone,
				webrtcSignalingService: WebrtcSignalingService) { 
		super(webrtcSignalingService);
		this._status = new ConsultationBookingConnectionStatus();
		this.localConnection = this.peerConnectionService.createRTCPeerConnection();
	}

	public handle(message: any) {
		const data = this.signalingData;

		switch(message.action) {
			case 'waitingForOther':
				this._status.isJoining = true;
				this._status.isJoined = false;
				(this._status as ConsultationBookingConnectionStatus).waitingForOther = message.status;
				this.status.next(this._status);
				break;
			case 'start':
				this.localConnection.addStream(this.localStream);

				this.localConnection.createOffer({OfferToReceiveAudio: true, OfferToReceiveVideo: true})
					.then((offer) => {
						this.localConnection.setLocalDescription(offer);

						this.webrtcSignalingService.offer({
							...data,
							offer
						});
					});

				this.localConnection.onaddstream = (e) => {
					this.ngZone.run(() => {
						this._status.isJoining = false;
						this._status.isJoined = true;
						this.status.next(this._status);
						this.otherJoined.next(e.stream);
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
				break;
			case 'offer':
				this.localConnection.addStream(this.localStream);
				this.localConnection.setRemoteDescription(new RTCSessionDescription(message.offer));

				this.localConnection.onaddstream = (e) => {
					this.ngZone.run(() => {
						this._status.isJoining = false;
						this._status.isJoined = true;
						this.status.next(this._status);
						this.otherJoined.next(e.stream);
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
			case 'answer':
				this.localConnection.setRemoteDescription(new RTCSessionDescription(message.answer));
				break;
			case 'receiveCandidate':
				this.localConnection.addIceCandidate(new RTCIceCandidate(message.candidate));
				break;
		}
	}

	public disconnect() {
		this.localStream.getTracks().forEach(track => track.stop());

		this.localConnection.close();
		this.localConnection= null;
	}

}
