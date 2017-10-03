import { Component, OnInit, Input } from '@angular/core';

import { Webinar } from '../../tutr/models';

@Component({
	selector: 'uikit-webinar-card-grid',
	templateUrl: './webinar-card-grid.component.html',
	styleUrls: ['./webinar-card-grid.component.css']
})
export class WebinarCardGridComponent implements OnInit {
	@Input() webinars: Webinar[];

	public groups: any[] = [];

	constructor() { }

	ngOnInit() {
		let i,
			j,
			chunk = 4;

		for (i = 0, j = this.webinars.length; i < j; i += chunk) {
		    this.groups.push(this.webinars.slice(i, i + chunk));
		}
	}

}
