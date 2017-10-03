import { Component, OnInit, Input } from '@angular/core';

import { Webinar } from '../../tutr/models';

@Component({
	selector: 'uikit-instructor-webinar-item',
	templateUrl: './instructor-webinar-item.component.html',
	styleUrls: ['./instructor-webinar-item.component.css']
})
export class InstructorWebinarItemComponent implements OnInit {
	@Input() webinar: Webinar;

	constructor() { }

	ngOnInit() {
	}

}
