import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { CourseGoals } from '../models';
import { CurriculumService } from '../services';



@Injectable()
export class CurriculumItemResolve implements Resolve<CourseGoals> {

	constructor(private curriculumService: CurriculumService) { }

	resolve(route: ActivatedRouteSnapshot) {
		return this.curriculumService.getCurriculum(
			route.params.curriculum_id
		);
	}
}