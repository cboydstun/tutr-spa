import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Course } from '../../../models';

@Component({
	selector: 'app-course-overview',
	templateUrl: './course-overview.component.html',
	styleUrls: ['./course-overview.component.css']
})
export class CourseOverviewComponent implements OnInit {
	public course: Course;

	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.parent.data.subscribe(data => {
			this.course = data.course;
		});
	}

}
