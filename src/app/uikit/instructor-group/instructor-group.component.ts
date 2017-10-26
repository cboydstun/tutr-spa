import { Component, OnInit, Input } from '@angular/core';

import { Profile } from '../../tutr/models';

@Component({
	selector: 'uikit-instructor-group',
	templateUrl: './instructor-group.component.html',
	styleUrls: ['./instructor-group.component.css']
})
export class InstructorGroupComponent implements OnInit {
	@Input() profiles: Profile[];

	constructor() { }

	ngOnInit() {
	}

}
