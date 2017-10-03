import { Component, OnInit, Input } from '@angular/core';

import { Webinar } from '../../tutr/models';

@Component({
	selector: 'uikit-webinar-card',
	templateUrl: './webinar-card.component.html',
	styleUrls: ['./webinar-card.component.css']
})
export class WebinarCardComponent implements OnInit {
	@Input() webinar: Webinar;

	constructor() { }

	ngOnInit() {
	}

}
