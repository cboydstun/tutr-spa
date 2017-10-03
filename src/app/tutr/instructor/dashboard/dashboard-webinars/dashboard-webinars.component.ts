import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Webinar } from '../../../models';

@Component({
	selector: 'tutr-dashboard-webinars',
	templateUrl: './dashboard-webinars.component.html',
	styleUrls: ['./dashboard-webinars.component.css']
})
export class DashboardWebinarsComponent implements OnInit {
	public webinars: Webinar[];

	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			debugger;
			this.webinars = data.webinars;
		});
	}

}
