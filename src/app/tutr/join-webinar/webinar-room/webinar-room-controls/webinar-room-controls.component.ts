import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'tutr-webinar-room-controls',
	templateUrl: './webinar-room-controls.component.html',
	styleUrls: ['./webinar-room-controls.component.css']
})
export class WebinarRoomControlsComponent implements OnInit {
	public isVideoMuted: boolean = false;
	public isAudioMuted: boolean = false;

	constructor() { }

	ngOnInit() {
	}

	public toggleAudioMute() {
		this.isAudioMuted = !this.isAudioMuted;
	}

	public toggleVideoMute() {
		this.isVideoMuted = !this.isVideoMuted;
	}

}
