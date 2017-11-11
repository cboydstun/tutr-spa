import { Subscription } from 'rxjs';

import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { Webinar, Profile } from '../../../models';
import { WebinarConnectionStatus } from '../../models';

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

	@Input() webinar: Webinar;
	@Input() profile: Profile;
	@Input() joinInfo: {room: string, id: string, ns: string};

	public cs: WebinarConnectionStatus = new WebinarConnectionStatus();

	public isInfoOpen: boolean = true;
	public isChatOpen: boolean = true;

	public participants: any[] = [];

	private statusSubscription: Subscription;
	private signalingSubscription: Subscription;
	private participantJoinedSubscription: Subscription;

	private localStream: MediaStream;

	constructor(private userMediaService: UserMediaService,
				private instructorCallService: InstructorCallService,
				private webrtcSignalingService: WebrtcSignalingService) { }

	ngOnInit() {
		this.instructorCallService.signalingData = this.joinInfo;

		this.statusSubscription = this.instructorCallService.status.subscribe((status: WebinarConnectionStatus) => {
			this.cs = status;
		});

		this.participantJoinedSubscription = this.instructorCallService.participantJoined.subscribe(participants => {
			this.participants = participants;
		});

		this.signalingSubscription = this.webrtcSignalingService.messages.subscribe((message: any) => {
			this.instructorCallService.handle(message);
		});
	}

	ngOnDestroy() {
		this.statusSubscription.unsubscribe();
		this.signalingSubscription.unsubscribe();
		this.participantJoinedSubscription.unsubscribe();
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
			this.instructorCallService.start(stream);
		});
	}

	public leave() {
		this.instructorCallService.leave().then(() => {
			this.bigVideo.nativeElement.srcObject = null;
		})
	}
}
