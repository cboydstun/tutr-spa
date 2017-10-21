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

	sendOfferToParticipant(id: string) {
		const data = this.signalingData;

		const participant = {
			conn: this.peerConnectionService.createRTCPeerConnection(),
			id: id
		};

		participant.conn.addStream(this.localStream);

		participant.conn.createOffer({OfferToReceiveAudio: true, OfferToReceiveVideo: true})
			.then((offer) => {
				participant.conn.setLocalDescription(offer);

				this.webrtcSignalingService.offer({
					...data,
					offer,
					to: id
				});
			});

		//participant.conn.onaddstream = (e) => {
		//	this.ngZone.run(() => {
		//	});
		//};

		participant.conn.onicecandidate = (event) => {
			if (event.candidate) {
				this.webrtcSignalingService.sendCandidate({
					...data,
					candidate: event.candidate,
					to: id
				});
			}
		};

		this.participants.push(participant);

		this.participantJoined.next(this.participants);
	}

	public handle(message: any) {
		let existingparticipant;
		let existingparticipantIndex;

		switch(message.action) {
			case 'participantsJoined':
				message.participants.map(id => this.sendOfferToParticipant(id));
				break;
			case 'participantLeft':
				existingparticipantIndex = this.participants.findIndex(p => p.id == message.id);

				existingparticipant = this.participants[existingparticipantIndex];
				existingparticipant.conn.close();
				existingparticipant.conn = null;
				existingparticipant.stream = null;

				this.participants.splice(existingparticipantIndex, 1);

				break;
			case 'answer':
				existingparticipant = this.participants.find(p => p.id === message.from);
				existingparticipant.conn.setRemoteDescription(new RTCSessionDescription(message.answer));
				break;
			case 'receiveCandidate':
				existingparticipant = this.participants.find(p => p.id === message.from);
				existingparticipant.conn.addIceCandidate(new RTCIceCandidate(message.candidate));
				break;
		};
	}

	public disconnect() {
		this.participants.forEach(p => {
			p.conn.close();
			p.stream = null;
			p.conn = null;
		});

		this.localStream.getTracks().forEach(track => track.stop());

		this.participants = [];
	}

}
