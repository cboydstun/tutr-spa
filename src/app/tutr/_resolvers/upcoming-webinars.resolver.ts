import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Webinar } from '../models';
import { WebinarService } from '../services';

@Injectable()
export class UpcomingWebinarsResolve implements Resolve<Webinar[]> {

	constructor(private webinarService: WebinarService) { }

	resolve(route: ActivatedRouteSnapshot) {
		return this.webinarService.upcoming();
	}
}