declare var RTCPeerConnection: any;

import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-webinar-room',
	templateUrl: './webinar-room.component.html',
	styleUrls: ['./webinar-room.component.css']
})
export class WebinarRoomComponent implements OnInit, OnDestroy {
	@ViewChild('bigVideo') localVideo;

	public webinar: any;
	public isSidebarOpen: boolean = true;

	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.webinar = data.webinar;
		});

		navigator.mediaDevices.getUserMedia({audio:true, video:true}).then(stream => {
			this.localVideo.nativeElement.srcObject = stream;

			let server = {
				iceServers: [
					{url:'stun:stun01.sipphone.com'},
					{url:'stun:stun.ekiga.net'},
					{url:'stun:stun.fwdnet.net'},
					{url:'stun:stun.ideasip.com'},
					{url:'stun:stun.iptel.org'},
					{url:'stun:stun.rixtelecom.se'},
					{url:'stun:stun.schlund.de'},
					{url:'stun:stun.l.google.com:19302'},
					{url:'stun:stun1.l.google.com:19302'},
					{url:'stun:stun2.l.google.com:19302'},
					{url:'stun:stun3.l.google.com:19302'},
					{url:'stun:stun4.l.google.com:19302'},
					{url:'stun:stunserver.org'},
					{url:'stun:stun.softjoys.com'},
					{url:'stun:stun.voiparound.com'},
					{url:'stun:stun.voipbuster.com'},
					{url:'stun:stun.voipstunt.com'},
					{url:'stun:stun.voxgratia.org'},
					{url:'stun:stun.xten.com'}
				]
			};

			let options = {
				optional: [
					{DtlsSrtpKeyAgreement: true},
					{RtpDataChannels: true}
				],
				mandatory: {
					OfferToReceiveAudio: true,
					OfferToReceiveVideo: true
				}
			};

			var pc = new RTCPeerConnection(server, options);

			pc.addStream(stream);

			pc.createOffer(options).then(offer => {
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

}
