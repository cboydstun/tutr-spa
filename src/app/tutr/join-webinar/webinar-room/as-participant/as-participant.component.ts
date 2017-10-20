import { Subscription } from 'rxjs';

import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { Webinar, Profile } from '../../../models';
import { ConnectionStatus } from '../../models';

import { 
	ParticipantCallService,
	WebrtcSignalingService
} from '../../services';

@Component({
	selector: 'tutr-as-participant',
	templateUrl: './as-participant.component.html',
	styleUrls: ['./as-participant.component.css']
})
export class AsParticipantComponent implements OnInit {
	@ViewChild('bigVideo') bigVideo;

	@Input() joinInfo: {room: string, id: string};

	public cs: ConnectionStatus = new ConnectionStatus();

	private statusSubscription: Subscription;
	private signalingSubscription: Subscription;
	private instructorJoinedSubscription: Subscription;

	constructor(private participantCallService: ParticipantCallService,
				private webrtcSignalingService: WebrtcSignalingService) { }

	ngOnInit() {
		this.participantCallService.signalingData = this.joinInfo;

		this.statusSubscription = this.participantCallService.status.subscribe(status => {
			console.log('status', status);
			this.cs = status;
		});

		this.signalingSubscription = this.webrtcSignalingService.messages.subscribe((message: any) => {
			this.participantCallService.handle(message);
		});

		this.instructorJoinedSubscription = this.participantCallService.instructorJoined.subscribe(stream => {
			console.log('instructorJoined');
			this.bigVideo.nativeElement.srcObject = stream;
		});
	}

	ngOnDestroy() {
		this.statusSubscription.unsubscribe();
		this.signalingSubscription.unsubscribe();
		this.instructorJoinedSubscription.unsubscribe();
	}

	public infoChanged(status) {
		//this.isInfoOpen = status;
	}

	public join() {
		this.participantCallService.join();
	}

	public leave() {
		this.participantCallService.leave();
	}
}
