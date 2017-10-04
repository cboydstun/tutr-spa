import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Webinar } from '../models';

@Injectable()
export class WebinarService {
	constructor(private httpClient: HttpClient) { }

	create(title: string): Promise<Webinar> {
		return Promise.resolve({
			name: 'Learning Path: Mastering Ember.js Application Development',
			slug: 'learning-path-mastering-emberjs-application-development',
			description: 'Learn how to build ambitious single-page web applications using the power of Ember.js and Ember CLI.'
		});
	}


	archived() : Promise<Webinar[]> {
		return Promise.resolve([
			{
				name: 'The Complete Ember 2 Developer Course',
				slug: 'the-complete-ember-2-developer-course',
				description: 'Learn how to build ambitious single-page web applications using the power of Ember.js and Ember CLI.',
				archived: true
			}
		]);
	}

	upcoming() : Promise<Webinar[]> {
		return Promise.resolve([
			{
				name: 'The Complete Ember 2 Developer Course',
				slug: 'the-complete-ember-2-developer-course',
				description: 'Learn how to build ambitious single-page web applications using the power of Ember.js and Ember CLI.'
			}
		]);
	}

	all() : Promise<Webinar[]> {
		return Promise.resolve([
			{
				name: 'Master EmberJS : Learn Ember JS From Scratch',
				slug: 'master-emberjs-learn-ember-js-from-scratch',
				description: 'Create your own interactive web app with this powerful JavaScript framework in this exciting expert-led course.'
			},
			{
				name: 'Build Web Apps Using EmberJS: The Complete Course',
				slug: 'build-web-apps-using-emberjs-the-complete-course',
				description: 'Learn to demystify the EmberJS JavaScript framework by learning all the core concepts of it and building a real web app'
			},
			{
				name: 'Starting with Ember.js 2',
				slug: 'starting-with-emberjs-2',
				description: 'Learn to develop web apps using Ember JS',
			},
			{
				name: 'Learning Ember JS',
				slug: 'learning-ember-js',
				description: 'Learn the basics of creating an advanced particle system of falling sparks and embers inside of UDK Cascade!',
			},
			{
				name: 'Learning Path: Mastering Ember.js Application Development',
				slug: 'learning-path-mastering-emberjs-application-development',
				description: 'Learn how to build ambitious single-page web applications using the power of Ember.js and Ember CLI.'
			}
		]);
	}

	get(slug: string): Promise<Webinar> {
		return Promise.resolve({
			name: 'Learning Path: Mastering Ember.js Application Development',
			slug: 'learning-path-mastering-emberjs-application-development',
			description: 'Learn how to build ambitious single-page web applications using the power of Ember.js and Ember CLI.'
		});
	}

}