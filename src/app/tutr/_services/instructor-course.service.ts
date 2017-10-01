import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Course } from '../models';

@Injectable()
export class InstructorCourseService {
	constructor(private httpClient: HttpClient) { }

	forInstructor() : Promise<Course[]> {
		return Promise.resolve([
			{
				name: 'The Complete Ember 2 Developer Course',
				slug: 'the-complete-ember-2-developer-course',
				description: 'Learn how to build ambitious single-page web applications using the power of Ember.js and Ember CLI.',
				image: 'https://udemy-images.udemy.com/course/304x171/1321988_5e72.jpg'
			},
			{
				name: 'Master EmberJS : Learn Ember JS From Scratch',
				slug: 'master-emberjs-learn-ember-js-from-scratch',
				description: 'Create your own interactive web app with this powerful JavaScript framework in this exciting expert-led course.',
				image: 'https://udemy-images.udemy.com/course/304x171/511942_d209.jpg'
			},
			{
				name: 'Build Web Apps Using EmberJS: The Complete Course',
				slug: 'build-web-apps-using-emberjs-the-complete-course',
				description: 'Learn to demystify the EmberJS JavaScript framework by learning all the core concepts of it and building a real web app',
				image: 'https://udemy-images.udemy.com/course/304x171/684794_b6ff_3.jpg'	
			},
			{
				name: 'Starting with Ember.js 2',
				slug: 'starting-with-emberjs-2',
				description: 'Learn to develop web apps using Ember JS',
				image: 'https://udemy-images.udemy.com/course/304x171/1014240_0896_2.jpg'
			},
			{
				name: 'Learning Ember JS',
				slug: 'learning-ember-js',
				description: 'Learn the basics of creating an advanced particle system of falling sparks and embers inside of UDK Cascade!',
				image: 'https://udemy-images.udemy.com/course/304x171/392412_891c_5.jpg'
			},
			{
				name: 'Learning Path: Mastering Ember.js Application Development',
				slug: 'learning-path-mastering-emberjs-application-development',
				description: 'Learn how to build ambitious single-page web applications using the power of Ember.js and Ember CLI.',
				image: 'https://udemy-images.udemy.com/course/304x171/1263534_780a_4.jpg'
			}
		]);
	}

	get(slug: string): Promise<Course> {
		return Promise.resolve({
			name: 'Learning Path: Mastering Ember.js Application Development',
			slug: 'learning-path-mastering-emberjs-application-development',
			description: 'Learn how to build ambitious single-page web applications using the power of Ember.js and Ember CLI.',
			image: 'https://udemy-images.udemy.com/course/304x171/1263534_780a_4.jpg'
		});
	}

}