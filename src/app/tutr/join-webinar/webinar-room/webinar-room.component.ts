declare var RTCPeerConnection: any;

import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Webinar, Profile } from '../../models';

import { IceService, WebrtcSignalingService } from '../services';

@Component({
	selector: 'app-webinar-room',
	templateUrl: './webinar-room.component.html',
	styleUrls: ['./webinar-room.component.css']
})
export class WebinarRoomComponent implements OnInit, OnDestroy {
	@ViewChild('bigVideo') localVideo;

	public webinar: Webinar;
	public profile: Profile;

	public isSidebarOpen: boolean = true;
	public isInfoOpen: boolean = false;

	constructor(private activatedRoute: ActivatedRoute,
				private iceService: IceService,
				private webrtcSignalingService: WebrtcSignalingService) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.webinar = data.webinar;
			this.profile = data.profile;
		});

		navigator.mediaDevices.getUserMedia({audio:true, video:true}).then(stream => {
			this.localVideo.nativeElement.srcObject = stream;

			let server = {
				iceServers: this.iceService.iceServers
			};

			var pc = new RTCPeerConnection(server, this.iceService.rtcOptions);

			pc.addStream(stream);

			pc.createOffer().then(offer => {
				pc.setLocalDescription(offer);
				console.log(offer.sdp);
			});

			pc.onicecandidate = (event) => {
				console.log(event);
			}
		});

		this.join();
	}

	ngOnDestroy() {
	}

	public infoChanged(status) {
		this.isInfoOpen = status;
	}

	public join() {
		this.webrtcSignalingService.join(this.webinar, this.profile);
	}

	public start() {
		this.webrtcSignalingService.start(this.webinar, this.profile);
	}

}
