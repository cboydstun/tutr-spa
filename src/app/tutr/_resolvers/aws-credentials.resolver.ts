import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { LoginService } from '../services';



@Injectable()
export class AWSCredentialsResolve implements Resolve<any> {

	constructor(private loginService: LoginService) { }

	resolve(route: ActivatedRouteSnapshot) {
		return this.loginService.getAuthentionStatus()
			.then(() => true)
			.catch(() => true);
	}
}