import { Subscription } from 'rxjs';

import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Webinar, Profile } from '../../models';
import { ConnectionStatus } from '../models';

@Component({
	selector: 'app-webinar-room',
	templateUrl: './webinar-room.component.html',
	styleUrls: ['./webinar-room.component.css']
})
export class WebinarRoomComponent implements OnInit, OnDestroy {
	public webinar: Webinar;
	public profile: Profile;

	public get isInstructor(): boolean {
		return this.profile.id == this.webinar.instructor_id;
	}

	public get joinInfo(): {room: string, id: string} {
		return {
			room: this.webinar.id,
			id: this.profile.id
		};
	}

	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.webinar = data.webinar;
			this.profile = data.profile;
		});
	}

	ngOnDestroy() {

	}
}
