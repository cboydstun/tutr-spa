import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Course, CourseGoals } from '../../../models';
import { InstructorCourseService } from '../../../services';

@Component({
	selector: 'tutr-course-goals',
	templateUrl: './course-goals.component.html',
	styleUrls: ['./course-goals.component.css']
})
export class CourseGoalsComponent implements OnInit {
	public course: Course;
	public courseGoals: CourseGoals;

	public form: FormGroup;

	constructor(private activatedRoute: ActivatedRoute,
				private instructorCourseService: InstructorCourseService) { }

	ngOnInit() {
		this.activatedRoute.parent.data.subscribe(data => {
			this.course = data.course;
		});

		this.activatedRoute.data.subscribe(data => {
			this.courseGoals = data.goals;
		});

		this.form = new FormGroup({
			'prerequisites': new FormControl(this.courseGoals.prerequisites, [
				Validators.required, 
			]),
			'targetStudent': new FormControl(this.courseGoals.target_student, [
				Validators.required
			]),
			'whatWillTheyLearn': new FormControl(this.courseGoals.what_will_they_learn, [
				Validators.required
			])
		});
	}

	onSubmit() {
		if (!this.form.valid) {
			return;
		}

		this.courseGoals.prerequisites = this.form.value.prerequisites;
		this.courseGoals.target_student = this.form.value.targetStudent;
		this.courseGoals.what_will_they_learn = this.form.value.whatWillTheyLearn;

		this.instructorCourseService.setGoals(this.courseGoals);
	}

}
