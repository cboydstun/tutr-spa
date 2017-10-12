import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import { Webinar } from '../models';

@Injectable()
export class InstructorWebinarService {
	constructor(private httpClient: HttpClient) { }

	forInstructor() : Promise<Webinar[]> {
		return this.httpClient.get<Webinar[]>('/ListInstructorDashboardWebinars').toPromise();
	}

	get(id: string): Promise<Webinar> {
		const params = new HttpParams().set('id', id);
		return this.httpClient.get<Webinar>('/DescribeInstructorDashboardWebinar').toPromise();
	}

	save(webinar: Webinar): Promise<Webinar> {
		return this.httpClient.post<Webinar>('/SaveInstructorDashboardWebinar', webinar).toPromise();
	}

}