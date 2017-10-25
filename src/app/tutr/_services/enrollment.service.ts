import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import { Profile, Course, Webinar } from '../models';

@Injectable()
export class EnrollmentService {
	constructor(private httpClient: HttpClient) { }

	enroll(to: Webinar|Course) {
		const type = to instanceof Webinar ? 'webinar' : 'course';
		const object_id = `${type}:${to.instructor_id}:${to.id}`;

		return this.httpClient.post('/Enroll', {object_id}).toPromise();
	}

	enrollmentStatus(to: Webinar|Course) {
		const type = to instanceof Webinar ? 'webinar' : 'course';
		const object_id = `${type}:${to.instructor_id}:${to.id}`;

		const params = new HttpParams().set('object_id', object_id);
		return this.httpClient.get('/EnrollmentStatus', {params}).toPromise().then((data: {status: boolean}) => {
			return data.status;
		});
	}

}