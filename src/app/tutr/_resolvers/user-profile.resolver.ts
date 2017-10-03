import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { UserProfileService } from '../services';

@Injectable()
export class UserProfileResolve implements Resolve<any> {

	constructor(private userProfileService: UserProfileService) { }

	resolve(route: ActivatedRouteSnapshot) {
		return this.userProfileService.getProfile();
	}
}