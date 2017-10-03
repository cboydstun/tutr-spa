import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Webinar } from '../models';
import { InstructorWebinarService } from '../services';

@Injectable()
export class InstructorWebinarsResolve implements Resolve<Webinar[]> {

	constructor(private webinarService: InstructorWebinarService) { }

	resolve(route: ActivatedRouteSnapshot) {
		return this.webinarService.forInstructor();
	}
}