declare var RTCPeerConnection: any;

import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IceService } from '../services';

@Component({
	selector: 'app-webinar-room',
	templateUrl: './webinar-room.component.html',
	styleUrls: ['./webinar-room.component.css']
})
export class WebinarRoomComponent implements OnInit, OnDestroy {
	@ViewChild('bigVideo') localVideo;

	public webinar: any;
	public isSidebarOpen: boolean = true;
	public isInfoOpen: boolean = false;

	constructor(private activatedRoute: ActivatedRoute,
				private iceService: IceService) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.webinar = data.webinar;
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
	}

	ngOnDestroy() {

	}

	public infoChanged(status) {
		this.isInfoOpen = status;
	}

}
