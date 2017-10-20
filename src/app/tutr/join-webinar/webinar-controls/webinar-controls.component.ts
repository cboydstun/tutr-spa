import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'tutr-webinar-controls',
	templateUrl: './webinar-controls.component.html',
	styleUrls: ['./webinar-controls.component.css']
})
export class WebinarControlsComponent implements OnInit {
	public isVideoMuted: boolean = false;
	public isAudioMuted: boolean = false;
	public isInfoOn: boolean = false;

	@Output() infoChanged = new EventEmitter<boolean>();
	@Output() videoMutedChanged = new EventEmitter<boolean>();
	@Output() audioMutedChanged = new EventEmitter<boolean>();

	constructor() { }

	ngOnInit() {
	}

	public toggleAudioMute() {
		this.isAudioMuted = !this.isAudioMuted;
		this.audioMutedChanged.emit(this.isAudioMuted);
	}

	public toggleVideoMute() {
		this.isVideoMuted = !this.isVideoMuted;
		this.videoMutedChanged.emit(this.isVideoMuted);
	}

	public toggleInfo() {
		this.isInfoOn = !this.isInfoOn;
		this.infoChanged.emit(this.isInfoOn);
	}

}
