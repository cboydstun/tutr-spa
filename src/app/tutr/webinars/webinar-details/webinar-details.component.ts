import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Webinar } from '../../models';

@Component({
	selector: 'app-webinar-details',
	templateUrl: './webinar-details.component.html',
	styleUrls: ['./webinar-details.component.css']
})
export class WebinarDetailsComponent implements OnInit {
	public webinar: Webinar;

	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.webinar = data.webinar;
		});
	}

}
