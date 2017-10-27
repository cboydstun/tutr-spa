import { Component, OnInit, Input } from '@angular/core';

import { Profile } from '../../tutr/models';

@Component({
	selector: 'uikit-instructor-group',
	templateUrl: './instructor-group.component.html',
	styleUrls: ['./instructor-group.component.css']
})
export class InstructorGroupComponent implements OnInit {
	@Input() profiles: Profile[];

	public groups: any[] = [];

	constructor() { }

	ngOnInit() {
		let i,
			j,
			chunk = 4;

		for (i = 0, j = this.profiles.length; i < j; i += chunk) {
		    this.groups.push(this.profiles.slice(i, i + chunk));
		}
	}

}
