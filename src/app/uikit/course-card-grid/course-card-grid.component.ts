import { Component, OnInit, Input } from '@angular/core';

import { Course } from '../../tutr/models';

@Component({
	selector: 'uikit-course-card-grid',
	templateUrl: './course-card-grid.component.html',
	styleUrls: ['./course-card-grid.component.css']
})
export class CourseCardGridComponent implements OnInit {
	@Input() courses: Course[];

	public groups: any[] = [];

	constructor() { }

	ngOnInit() {
		let i,
			j,
			chunk = 4;

		for (i = 0, j = this.courses.length; i < j; i += chunk) {
		    this.groups.push(this.courses.slice(i, i + chunk));
		}
	}

}
