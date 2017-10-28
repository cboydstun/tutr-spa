import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Course } from '../../../models';
import { CourseService } from '../../../services';

@Component({
	selector: 'tutr-create-course',
	templateUrl: './create-course.component.html',
	styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
	public isLoading: boolean = false;

	constructor(private courseService: CourseService,
				private router: Router) { }

	ngOnInit() {

	}

	onSubmit(title: string) {
		this.isLoading = true;
		this.courseService.create(title)
			.then((course: Course) => this.router.navigate(['/instructor', 'course', course.id]))
	}

}
