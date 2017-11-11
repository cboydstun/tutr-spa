import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { ConsultationBooking, Profile } from '../../models';
import { ConsultationBookingConnectionStatus } from '../models';

import { 
	UserMediaService,
	ConsultationCallService,
	WebrtcSignalingService
} from '../services';

@Component({
	selector: 'tutr-consultation-room',
	templateUrl: './consultation-room.component.html',
	styleUrls: ['./consultation-room.component.css']
})
export class ConsultationRoomComponent implements OnInit, OnDestroy {
	@ViewChild('bigVideo') bigVideo;

	public consultationBooking: ConsultationBooking;
	public profile: Profile;

	public cs: ConsultationBookingConnectionStatus = new ConsultationBookingConnectionStatus();

	public isInfoOpen: boolean = true;
	public isChatOpen: boolean = true;

	private localStream: MediaStream;

	private statusSubscription: Subscription;
	private signalingSubscription: Subscription;
	private otherJoinedSubscription: Subscription;

	public get joinInfo(): {room: string, id: string, ns: string} {
		return {
			room: this.consultationBooking.id,
			id: this.profile.id,
			ns: 'consultation'
		};
	}

	constructor(private userMediaService: UserMediaService,
				private webrtcSignalingService: WebrtcSignalingService,
				private consultationCallService: ConsultationCallService,
				private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.consultationBooking = data.consultationBooking;
			this.profile = data.profile;
		});

		this.statusSubscription = this.consultationCallService.status.subscribe((status: ConsultationBookingConnectionStatus) => {
			this.cs = status;
		});

		this.signalingSubscription = this.webrtcSignalingService.messages.subscribe((message: any) => {
			this.consultationCallService.handle(message);
		});

		this.otherJoinedSubscription = this.consultationCallService.otherJoined.subscribe(stream => {
			this.bigVideo.nativeElement.srcObject = stream;
		});

		this.consultationCallService.signalingData = this.joinInfo;
	}

	ngOnDestroy() {
		this.statusSubscription.unsubscribe();
		this.signalingSubscription.unsubscribe();
		this.otherJoinedSubscription.unsubscribe();
		this.webrtcSignalingService.disconnect();
	}

	public infoChanged(status: boolean) {
		this.isInfoOpen = status;
	}

	public chatChanged(status: boolean) {
		this.isChatOpen = status;
	}

	public audioMutedChanged(status: boolean) {
	}

	public videoMutedChanged(status: boolean) {
		
	}

	public join() {
		this.userMediaService.ask().then(stream => {
			this.localStream = stream;
			this.bigVideo.nativeElement.srcObject = stream;
			this.consultationCallService.start(stream);
		});
	}

	public leave() {
		this.consultationCallService.leave().then(() => {
			this.bigVideo.nativeElement.srcObject = null;
		})
	}
}
