import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Webinar } from '../../models';

@Component({
	selector: 'tutr-webinars',
	templateUrl: './webinars.component.html',
	styleUrls: ['./webinars.component.css']
})
export class WebinarsComponent implements OnInit {
	public webinars: Webinar[];

	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			debugger
			this.webinars = data.webinars;
		});
	}

}
