import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Course } from '../../../models';
import { InstructorCourseService } from '../../../services';

@Component({
	selector: 'tutr-course-landing-page',
	templateUrl: './course-landing-page.component.html',
	styleUrls: ['./course-landing-page.component.css']
})
export class CourseLandingPageComponent implements OnInit {
	public course: Course;
	public form: FormGroup;

	constructor(private activatedRoute: ActivatedRoute,
				private instructorCourseService: InstructorCourseService) { }

	ngOnInit() {
		this.activatedRoute.parent.data.subscribe(data => {
			this.course = data.course;
		});

		this.form = new FormGroup({
			'title': new FormControl(this.course.title, [
				Validators.required, 
			]),
			'subtitle': new FormControl(this.course.subtitle, [
				Validators.required
			]),
			'description': new FormControl(this.course.description, [
				Validators.required
			])
		});
	}

	onSubmit() {
		if (!this.form.valid) {
			return;
		}

		this.course.title = this.form.value.title;
		this.course.subtitle = this.form.value.subtitle;
		this.course.description = this.form.value.description;

		this.instructorCourseService.save(this.course);
	}

}
