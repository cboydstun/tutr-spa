import { Subscription } from 'rxjs';

import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { Webinar, Profile } from '../../../models';
import { ConnectionStatus } from '../../models';

import { 
	UserMediaService,
	InstructorCallService,
	WebrtcSignalingService
} from '../../services';

@Component({
	selector: 'tutr-as-instructor',
	templateUrl: './as-instructor.component.html',
	styleUrls: ['./as-instructor.component.css']
})
export class AsInstructorComponent implements OnInit {
	@ViewChild('bigVideo') bigVideo;

	@Input() joinInfo: {room: string, id: string};

	public cs: ConnectionStatus = new ConnectionStatus();

	public isInfoOpen: boolean = false;

	public participantsCount: number = 0;
	public participants: any[] = [];

	private statusSubscription: Subscription;
	private signalingSubscription: Subscription;
	private participantJoinedSubscription: Subscription;

	constructor(private userMediaService: UserMediaService,
				private instructorCallService: InstructorCallService,
				private webrtcSignalingService: WebrtcSignalingService) { }

	ngOnInit() {
		this.instructorCallService.signalingData = this.joinInfo;

		this.statusSubscription = this.instructorCallService.status.subscribe(status => {
			console.log('status', status);
			this.cs = status;
		});

		this.participantJoinedSubscription = this.instructorCallService.participantJoined.subscribe(participants => {
			this.participants = participants;
			this.participantsCount = participants.length;
		});

		this.signalingSubscription = this.webrtcSignalingService.messages.subscribe((message: any) => {
			this.instructorCallService.handle(message);
		});
	}

	ngOnDestroy() {
		this.statusSubscription.unsubscribe();
		this.signalingSubscription.unsubscribe();
		this.participantJoinedSubscription.unsubscribe();
	}

	public infoChanged(status) {
		this.isInfoOpen = status;
	}

	public join() {
		this.userMediaService.ask().then(stream => {
			this.bigVideo.nativeElement.srcObject = stream;
			this.instructorCallService.start(stream);
		});
	}

	public leave() {
		this.instructorCallService.leave();
	}
}
