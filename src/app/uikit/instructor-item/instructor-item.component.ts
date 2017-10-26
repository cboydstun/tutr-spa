import { Component, OnInit, Input } from '@angular/core';

import { Profile } from '../../tutr/models';

@Component({
	selector: 'uikit-instructor-item',
	templateUrl: './instructor-item.component.html',
	styleUrls: ['./instructor-item.component.css']
})
export class InstructorItemComponent implements OnInit {
	@Input() profile: Profile;

	constructor() { }

	ngOnInit() {
	}

}
