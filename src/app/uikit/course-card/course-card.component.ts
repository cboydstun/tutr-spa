import { Component, OnInit, Input } from '@angular/core';

import { Course } from '../../tutr/models';

@Component({
	selector: 'uikit-course-card',
	templateUrl: './course-card.component.html',
	styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
	@Input() course: Course;

	constructor() { }

	ngOnInit() {
	}

}
