import { Subscription } from 'rxjs';

import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Webinar, Profile } from '../../models';
import { ConnectionStatus } from '../models';

import { 
	UserMediaService,
	ParticipantFlowService,
	InstructorFlowService,
	WebinarFlowService
} from '../services';

@Component({
	selector: 'app-webinar-room',
	templateUrl: './webinar-room.component.html',
	styleUrls: ['./webinar-room.component.css']
})
export class WebinarRoomComponent implements OnInit, OnDestroy {
	@ViewChild('bigVideo') bigVideo;

	public webinar: Webinar;
	public profile: Profile;

	public isSidebarOpen: boolean = true;
	public isInfoOpen: boolean = false;

	public cs: ConnectionStatus = new ConnectionStatus();

	public webinarFlow: WebinarFlowService;

	private statusSubscription: Subscription;

	constructor(private activatedRoute: ActivatedRoute,
				private userMediaService: UserMediaService,
				private instructorFlowService: InstructorFlowService,
				private participantFlowService: ParticipantFlowService) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.webinar = data.webinar;
			this.profile = data.profile;
		});

		this.userMediaService.ask()
			.then((stream) => this.bigVideo.nativeElement.srcObject = stream);

		if (this.profile.id == this.webinar.instructor_id) {
			this.webinarFlow = this.instructorFlowService;
		} else {
			this.webinarFlow = this.participantFlowService;
		}

		this.webinarFlow.setSignalingData(this.webinar.id, this.profile.id);

		this.statusSubscription = this.webinarFlow.status.subscribe(status => {
			console.log('status', status);
			this.cs = status;
		});

		this.webinarFlow.instructorJoined.subscribe(stream => {
			console.log('instructorJoined');
			this.bigVideo.nativeElement.srcObject = stream;
		});
	}

	ngOnDestroy() {
		this.statusSubscription.unsubscribe();
		this.webinarFlow.dispose();
	}

	public infoChanged(status) {
		this.isInfoOpen = status;
	}

	public join() {
		this.webinarFlow.join();
	}

	public leave() {
		this.webinarFlow.leave();
	}

}
