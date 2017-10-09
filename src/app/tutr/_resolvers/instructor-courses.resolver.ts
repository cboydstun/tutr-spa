import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { NgProgressService } from 'ngx-progressbar';

import { Course } from '../models';
import { InstructorCourseService } from '../services';

@Injectable()
export class InstructorCoursesResolve implements Resolve<Course[]> {

	constructor(private courseService: InstructorCourseService,
				private ngProgressService: NgProgressService) { }

	resolve(route: ActivatedRouteSnapshot) {
		this.ngProgressService.start();
		return this.courseService.forInstructor().then(x => {
			this.ngProgressService.done();
			return x;
		});
	}
}