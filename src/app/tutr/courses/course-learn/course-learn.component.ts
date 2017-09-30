import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Course } from '../../models';

@Component({
	selector: 'app-course-learn',
	templateUrl: './course-learn.component.html',
	styleUrls: ['./course-learn.component.css']
})
export class CourseLearnComponent implements OnInit {
	public course: Course;

	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.course = data.course;
		});
	}

}
