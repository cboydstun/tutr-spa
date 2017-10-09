import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Course } from '../models';
import { CategoryCourseService } from '../services';

@Injectable()
export class CategoryCoursesResolve implements Resolve<Course[]> {

	constructor(private courseService: CategoryCourseService) { }

	resolve(route: ActivatedRouteSnapshot) {
		return this.courseService.forCategory(route.params.category);
	}
}