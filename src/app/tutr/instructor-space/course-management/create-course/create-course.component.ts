import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Course } from '../../../models';
import { CourseService } from '../../../services';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
	selector: 'tutr-create-course',
	templateUrl: './create-course.component.html',
	styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
	public isLoading: boolean = false;

	constructor(private courseService: CourseService,
				private router: Router,
				private toastr: ToastsManager) { }

	ngOnInit() {

	}

	onSubmit(title: string) {
		this.isLoading = true;
		this.courseService.create(title)
			.then((course: Course) => {
				this.toastr.success('Course created');
				this.toastr.info('Redirecting you to edit page');
				this.router.navigate(['/instructor', 'course', course.id])
			});
	}

}
