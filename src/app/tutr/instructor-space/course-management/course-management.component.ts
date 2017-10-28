import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Course, Profile } from '../../models';
import { SubmitCourseService } from '../../services';

@Component({
	selector: 'tutr-course-management',
	templateUrl: './course-management.component.html',
	styleUrls: ['./course-management.component.css']
})
export class CourseManagementComponent implements OnInit {
	public course: Course;
	public profile: Profile

	public isSubmittingCourse: boolean = false;

	constructor(private activatedRoute: ActivatedRoute,
				private submitCourseService: SubmitCourseService) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.course = data.course;
			this.profile = data.profile;
		});
	}

	public submitCourse() {
		if (!this.profile.completed) {
			return;
		}

		this.isSubmittingCourse = true;

		this.submitCourseService.submit(this.course)
			.then(() => this.isSubmittingCourse = false)
			.catch(() => this.isSubmittingCourse = false);
	}

}
