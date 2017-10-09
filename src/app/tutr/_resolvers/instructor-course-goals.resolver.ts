import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { CourseGoals } from '../models';
import { InstructorCourseService } from '../services';

@Injectable()
export class InstructorCourseGoalsResolve implements Resolve<CourseGoals> {

	constructor(private courseService: InstructorCourseService) { }

	resolve(route: ActivatedRouteSnapshot) {
		return this.courseService.getGoals(route.parent.params.id);
	}
}