import { Component, OnInit, Input } from '@angular/core';

import { Webinar } from '../../tutr/models';

@Component({
	selector: 'uikit-instructor-webinar-group',
	templateUrl: './instructor-webinar-group.component.html',
	styleUrls: ['./instructor-webinar-group.component.css']
})
export class InstructorWebinarGroupComponent implements OnInit {
	@Input() webinars: Webinar[];

	constructor() { }

	ngOnInit() {
	}

}
