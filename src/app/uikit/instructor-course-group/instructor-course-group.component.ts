import { Component, OnInit, Input } from '@angular/core';

import { Course } from '../../tutr/models';

@Component({
	selector: 'uikit-instructor-course-group',
	templateUrl: './instructor-course-group.component.html',
	styleUrls: ['./instructor-course-group.component.css']
})
export class InstructorCourseGroupComponent implements OnInit {
	@Input() courses: Course[];

	constructor() { }

	ngOnInit() {
	}

}
