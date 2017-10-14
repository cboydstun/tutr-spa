import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Webinar } from '../../models';
import { SubmitWebinarService } from '../../services';

@Component({
	selector: 'tutr-webinar-management',
	templateUrl: './webinar-management.component.html',
	styleUrls: ['./webinar-management.component.css']
})
export class WebinarManagementComponent implements OnInit {
	public webinar: Webinar;

	public isSubmittingWebinar: boolean = false;

	constructor(private activatedRoute: ActivatedRoute,
				private submitWebinarService: SubmitWebinarService) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.webinar = data.webinar;
		});
	}

	submitWebinar() {
		this.isSubmittingWebinar = true;

		this.submitWebinarService.submit(this.webinar)
			.then(() => this.isSubmittingWebinar = false)
			.catch(() => this.isSubmittingWebinar = false);
	}

}
