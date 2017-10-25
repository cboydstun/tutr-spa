import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import { Profile, Course, Webinar } from '../models';

@Injectable()
export class EnrollmentService {
	constructor(private httpClient: HttpClient) { }

	enroll(to: Webinar|Course) {
	}

	enrollmentStatus(to: Webinar|Course) {
	}

}