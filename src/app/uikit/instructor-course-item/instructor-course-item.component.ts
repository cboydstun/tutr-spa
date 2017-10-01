import { Component, OnInit, Input } from '@angular/core';

import { Course } from '../../tutr/models';

@Component({
	selector: 'uikit-instructor-course-item',
	templateUrl: './instructor-course-item.component.html',
	styleUrls: ['./instructor-course-item.component.css']
})
export class InstructorCourseItemComponent implements OnInit {
	@Input() course: Course;

	constructor() { }

	ngOnInit() {
	}

}
