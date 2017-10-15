import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Course } from '../../../models';

@Component({
	selector: 'app-course-content',
	templateUrl: './course-content.component.html',
	styleUrls: ['./course-content.component.css']
})
export class CourseContentComponent implements OnInit {
	public course: Course;

	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.parent.data.subscribe(data => {
			this.course = data.course;
		});
	}

}
