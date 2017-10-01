import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Course } from '../models';
import { InstructorCourseService } from '../services';

@Injectable()
export class InstructorCourseResolve implements Resolve<Course> {

	constructor(private courseService: InstructorCourseService) { }

	resolve(route: ActivatedRouteSnapshot) {
		return this.courseService.get(route.params.course);
	}
}