import { Subscription } from 'rxjs';

import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { ConsultationBooking, Profile } from '../../models';
import { ConnectionStatus } from '../models';

import { 
	UserMediaService
} from '../services';

@Component({
	selector: 'tutr-consultation-room',
	templateUrl: './consultation-room.component.html',
	styleUrls: ['./consultation-room.component.css']
})
export class ConsultationRoomComponent implements OnInit {
	@ViewChild('bigVideo') bigVideo;

	@Input() booking: ConsultationBooking;
	@Input() profile: Profile;

	public cs: ConnectionStatus = new ConnectionStatus();

	public isInfoOpen: boolean = true;
	public isChatOpen: boolean = true;

	private localStream: MediaStream;

	constructor(private userMediaService: UserMediaService) { }

	ngOnInit() {
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
			//this.instructorCallService.start(stream);
		});
	}

	public leave() {
		//this.instructorCallService.leave().then(() => {
		//	this.bigVideo.nativeElement.srcObject = null;
		//})
	}
}
