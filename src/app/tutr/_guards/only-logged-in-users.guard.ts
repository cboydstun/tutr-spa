import { Injectable } from '@angular/core';
import { 
	CanActivate, 
	CanActivateChild, 
	ActivatedRouteSnapshot, 
	RouterStateSnapshot, 
	Router 
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { LoginService } from '../services';

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate, CanActivateChild {

	constructor(private router: Router,
				private loginService: LoginService) { }

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		return this.loginService.getAuthentionStatus().then((status: boolean) => {
			if (!status) {
				this.router.navigate(['/auth', 'login']);
				return false;
			}

			return true;
		});
	}

	canActivateChild(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		return this.canActivate(next, state);
	}

}
