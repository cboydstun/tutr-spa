import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Profile } from '../models';
import { UserProfileService } from '../services';

@Injectable()
export class AllPublicInstructorsResolve implements Resolve<Profile[]> {

	constructor(private userProfileService: UserProfileService) { }

	resolve(route: ActivatedRouteSnapshot) {
		return this.userProfileService.listInstructors();
	}
}