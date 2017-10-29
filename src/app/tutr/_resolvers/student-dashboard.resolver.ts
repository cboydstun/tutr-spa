import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { StudentDashboard } from '../models';
import { StudentDashboardService } from '../services';



@Injectable()
export class StudentDashboardResolve implements Resolve<StudentDashboard[]> {

	constructor(private studentDashboardService: StudentDashboardService) { }

	resolve(route: ActivatedRouteSnapshot) {
		return this.studentDashboardService.forStudent();
	}
}