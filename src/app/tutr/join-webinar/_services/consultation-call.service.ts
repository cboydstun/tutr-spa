import { Subscription, Subject } from 'rxjs';

import { Injectable } from '@angular/core';

import { UserMediaService } from './user-media.service';
import { WebrtcSignalingService } from './webrtc-signaling.service';
import { PeerConnectionService } from './peer-connection.service';

import { ConsultationBookingConnectionStatus } from '../_models/consultation-booking-connection-status';
import { BaseCallService } from './base-call.service';

@Injectable()
export class ConsultationCallService extends BaseCallService {
	protected localConnection;
	protected remoteConnection;

	constructor(protected userMediaService: UserMediaService,
				protected peerConnectionService: PeerConnectionService,
				webrtcSignalingService: WebrtcSignalingService) { 
		super(webrtcSignalingService);
		this._status = new ConsultationBookingConnectionStatus();
	}

	public handle(message: any) {
		switch(message.action) {
			case 'waitingForOther':
				this._status.isJoining = true;
				this._status.isJoined = !message.status;
				(this._status as ConsultationBookingConnectionStatus).waitingForOther = message.status;
				this.status.next(this._status);
				break;
		};
	}

	public disconnect() {
		this.localStream.getTracks().forEach(track => track.stop());
	}

}
