import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import { Webinar } from '../models';

@Injectable()
export class WebinarService {
	constructor(private httpClient: HttpClient) { }

	create(title: string): Promise<Webinar> {
		return this.httpClient.post<Webinar>('/CreateWebinar', {title}).toPromise();
	}

	archived() : Promise<Webinar[]> {
		return this.httpClient.get<Webinar[]>('/ListArchivedWebinars').toPromise();
	}

	upcoming() : Promise<Webinar[]> {
		return this.httpClient.get<Webinar[]>('/ListUpcomingWebinars').toPromise();
	}

	get(instructor_id: string, id: string): Promise<Webinar> {
		const params = new HttpParams().set('id', id).set('instructor_id', instructor_id);
		return this.httpClient.get<Webinar>('/DescribeWebinar', {params}).toPromise();
	}

}