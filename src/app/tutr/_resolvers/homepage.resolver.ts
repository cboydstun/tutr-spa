import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Homepage } from '../models';
import { HomepageService } from '../services';

@Injectable()
export class HomepageResolve implements Resolve<Homepage> {

	constructor(private homepageService: HomepageService) { }

	resolve(route: ActivatedRouteSnapshot) {
		return this.homepageService.get();
	}
}