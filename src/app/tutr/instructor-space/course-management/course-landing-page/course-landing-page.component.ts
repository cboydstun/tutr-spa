import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Course, Category } from '../../../models';
import { InstructorCourseService } from '../../../services';
import { CategoryService } from '../../../services';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
	selector: 'tutr-course-landing-page',
	templateUrl: './course-landing-page.component.html',
	styleUrls: ['./course-landing-page.component.css']
})
export class CourseLandingPageComponent implements OnInit {
	public course: Course;
	public form: FormGroup;

	public categories: Category[] = [];

	public isLoading: boolean = false;

	constructor(private activatedRoute: ActivatedRoute,
				private instructorCourseService: InstructorCourseService,
				private categoryService: CategoryService,
				private toastr: ToastsManager) { }

	ngOnInit() {
		this.activatedRoute.parent.data.subscribe(data => {
			this.course = data.course;
		});

		this.categories = this.categoryService.categories;

		this.form = new FormGroup({
			'title': new FormControl(this.course.title, [
				Validators.required, 
			]),
			'subtitle': new FormControl(this.course.subtitle, [
				Validators.required
			]),
			'description': new FormControl(this.course.description, [
				Validators.required
			]),
			'category_id': new FormControl(this.course.category_id, [
				Validators.required
			])
		});
	}

	onSubmit() {
		if (!this.form.valid) {
			return;
		}

		this.isLoading = true;

		this.course.title = this.form.value.title;
		this.course.subtitle = this.form.value.subtitle;
		this.course.description = this.form.value.description;
		this.course.category_id = this.form.value.category_id;
		this.course.category_name = this.categoryService.get(this.form.value.category_id).title;

		this.instructorCourseService.save(this.course)
			.then(() => {
				this.toastr.success('Saved');
				this.isLoading = false
			})
			.catch(() => this.isLoading = false);
	}

}
