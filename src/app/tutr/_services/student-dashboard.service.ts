import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import { 
	StudentDashboard
} from '../models';

import { environment } from "../../../environments/environment";

import { NgProgressService } from 'ngx-progressbar';

@Injectable()
export class StudentDashboardService {
	constructor(private httpClient: HttpClient) { }

	forStudent() : Promise<StudentDashboard[]> {
		return this.httpClient.get<StudentDashboard[]>('/DescribeStudentDashboard').toPromise();
	}

}