import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Webinar } from '../../../models';

@Component({
	selector: 'tutr-webinar-basics',
	templateUrl: './webinar-basics.component.html',
	styleUrls: ['./webinar-basics.component.css']
})
export class WebinarBasicsComponent implements OnInit {
	public webinar: Webinar;

	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.parent.data.subscribe(data => {
			this.webinar = data.webinar;
		});
	}

}
