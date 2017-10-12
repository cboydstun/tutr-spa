import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Webinar } from '../../models';

@Component({
	selector: 'tutr-webinar-management',
	templateUrl: './webinar-management.component.html',
	styleUrls: ['./webinar-management.component.css']
})
export class WebinarManagementComponent implements OnInit {
	public webinar: Webinar;

	public isSubmittingWebinar: boolean = false;

	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.webinar = data.webinar;
		});
	}

	submitWebinar() {

	}

}
