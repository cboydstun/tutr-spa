import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Course } from '../models';
import { CourseService } from '../services';



@Injectable()
export class CourseResolve implements Resolve<Course> {

	constructor(private courseService: CourseService) { }

	resolve(route: ActivatedRouteSnapshot) {
		
		return this.courseService.get(route.params.course);
	}
}