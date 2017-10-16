import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Homepage } from '../models';

@Injectable()
export class HomepageService {
	constructor(private httpClient: HttpClient) { }


	get() : Promise<Homepage> {
		return Promise.resolve({
			courses: [
			{
				title: 'The Complete Ember 2 Developer Course',
				subtitle: 'The Complete Ember 2 Developer Course',
				slug: 'the-complete-ember-2-developer-course',
				description: 'Learn how to build ambitious single-page web applications using the power of Ember.js and Ember CLI.'
			},
			{
				title: 'Master EmberJS : Learn Ember JS From Scratch',
				subtitle: 'The Complete Ember 2 Developer Course',
				slug: 'master-emberjs-learn-ember-js-from-scratch',
				description: 'Create your own interactive web app with this powerful JavaScript framework in this exciting expert-led course.',
			},
			{
				title: 'Build Web Apps Using EmberJS: The Complete Course',
				subtitle: 'The Complete Ember 2 Developer Course',
				slug: 'build-web-apps-using-emberjs-the-complete-course',
				description: 'Learn to demystify the EmberJS JavaScript framework by learning all the core concepts of it and building a real web app',
			},
			{
				title: 'Starting with Ember.js 2',
				subtitle: 'The Complete Ember 2 Developer Course',
				slug: 'starting-with-emberjs-2',
				description: 'Learn to develop web apps using Ember JS',
			},
			{
				title: 'Learning Ember JS',
				subtitle: 'The Complete Ember 2 Developer Course',
				slug: 'learning-ember-js',
				description: 'Learn the basics of creating an advanced particle system of falling sparks and embers inside of UDK Cascade!',
			}
			],
			webinars: [
				{
					title: 'Learning Path: Mastering Ember.js Application Development',
					slug: 'learning-path-mastering-emberjs-application-development',
					description: 'Learn how to build ambitious single-page web applications using the power of Ember.js and Ember CLI.'
				},
				{
					title: 'Starting with Ember.js 2',
					slug: 'starting-with-emberjs-2',
					description: 'Learn to develop web apps using Ember JS',
				},
				{
					title: 'Build Web Apps Using EmberJS: The Complete Course',
					slug: 'build-web-apps-using-emberjs-the-complete-course',
					description: 'Learn to demystify the EmberJS JavaScript framework by learning all the core concepts of it and building a real web app'
				}
			]
		});
	}

}