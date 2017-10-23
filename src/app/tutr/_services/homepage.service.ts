import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Homepage, Course, Webinar } from '../models';

@Injectable()
export class HomepageService {
	constructor(private httpClient: HttpClient) { }


	get() : Promise<Homepage> {
		return this.httpClient.get<Homepage>('/DescribeHomepage').toPromise().then((homepage: Homepage) => {
			return {
				webinars: homepage.webinars.map(item => new Webinar(item)),
				courses: homepage.courses.map(item => new Course(item))
			};
		});
	}
}