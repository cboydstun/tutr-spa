import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
	selector: 'tutr-webinar-controls',
	templateUrl: './webinar-controls.component.html',
	styleUrls: ['./webinar-controls.component.css']
})
export class WebinarControlsComponent implements OnInit {
	@Input() showAudioMute: boolean = true;
	@Input() showVideoMute: boolean = true;

	@Output() infoChanged = new EventEmitter<boolean>();
	@Output() videoMutedChanged = new EventEmitter<boolean>();
	@Output() audioMutedChanged = new EventEmitter<boolean>();
	@Output() onStop = new EventEmitter<void>();

	public isVideoMuted: boolean = false;
	public isAudioMuted: boolean = false;
	public isInfoOn: boolean = true;

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

	public stop() {
		this.onStop.emit();
	}

}
