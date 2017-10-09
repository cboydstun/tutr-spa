import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { LoginService } from '../services';

@Injectable()
export class OnlyInstructorsGuard implements CanActivate {

	constructor(private router: Router,
				private loginService: LoginService) { }

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		return this.loginService.isAuthenticated.map(status => {
			if (!status) {
				this.router.navigate(['/auth', 'login']);
				return false;
			}

			return true;
		});
	}
}
