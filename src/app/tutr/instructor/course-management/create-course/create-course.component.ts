import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Course } from '../../../models';
import { CourseService } from '../../../services';

@Component({
	selector: 'app-create-course',
	templateUrl: './create-course.component.html',
	styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
	public form: FormGroup;

	constructor(private courseService: CourseService,
				private router: Router) { }

	ngOnInit() {
		this.form = new FormGroup({
			'title': new FormControl('', [
				Validators.required, 
			]),
		});
	}

	onSubmit() {
		if (!this.form.valid) {
			return;
		}

		this.courseService.create(this.form.value.title)
			.then((course: Course) => this.router.navigate(['/instructor', 'course', course.slug]))
	}

}
