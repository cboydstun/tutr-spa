import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Webinar, Profile } from '../../models';
import { SubmitWebinarService } from '../../services';

@Component({
	selector: 'tutr-webinar-management',
	templateUrl: './webinar-management.component.html',
	styleUrls: ['./webinar-management.component.css']
})
export class WebinarManagementComponent implements OnInit {
	public webinar: Webinar;
	public profile: Profile;

	public isSubmittingWebinar: boolean = false;

	constructor(private activatedRoute: ActivatedRoute,
				private submitWebinarService: SubmitWebinarService) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.webinar = data.webinar;
			this.profile = data.profile;
		});
	}

	submitWebinar() {
		if (!this.profile.completed) {
			return;
		}

		this.isSubmittingWebinar = true;

		this.submitWebinarService.submit(this.webinar)
			.then(() => this.isSubmittingWebinar = false)
			.catch(() => this.isSubmittingWebinar = false);
	}

}
