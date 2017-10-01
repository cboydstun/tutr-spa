import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Course } from '../../../models';

@Component({
	selector: 'app-course-goals',
	templateUrl: './course-goals.component.html',
	styleUrls: ['./course-goals.component.css']
})
export class CourseGoalsComponent implements OnInit {
	public course: Course;

	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.parent.data.subscribe(data => {
			this.course = data.course;
		});
	}

}
