import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Webinar } from '../models';

@Injectable()
export class WebinarService {
	constructor(private httpClient: HttpClient) { }

	create(title: string): Promise<Webinar> {
		return this.httpClient.post<Webinar>('/CreateWebinar', {title}).toPromise();
	}

	archived() : Promise<Webinar[]> {
		return Promise.resolve([
			{
				title: 'The Complete Ember 2 Developer Course',
				slug: 'the-complete-ember-2-developer-course',
				description: 'Learn how to build ambitious single-page web applications using the power of Ember.js and Ember CLI.',
				archived: true
			}
		]);
	}

	upcoming() : Promise<Webinar[]> {
		return Promise.resolve([
			{
				title: 'The Complete Ember 2 Developer Course',
				slug: 'the-complete-ember-2-developer-course',
				description: 'Learn how to build ambitious single-page web applications using the power of Ember.js and Ember CLI.'
			}
		]);
	}

	get(slug: string): Promise<Webinar> {
		return Promise.resolve({
			title: 'Learning Path: Mastering Ember.js Application Development',
			slug: 'learning-path-mastering-emberjs-application-development',
			description: 'Learn how to build ambitious single-page web applications using the power of Ember.js and Ember CLI.'
		});
	}

}