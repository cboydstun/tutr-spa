import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Course } from '../models';

@Injectable()
export class CourseService {
	constructor(private httpClient: HttpClient) { }

	get(slug: string): Promise<Course> {
		return Promise.resolve({
			title: 'Learning Path: Mastering Ember.js Application Development',
			subtitle: 'Learning Path: Mastering Ember.js Application Development',
			slug: 'learning-path-mastering-emberjs-application-development',
			description: 'Learn how to build ambitious single-page web applications using the power of Ember.js and Ember CLI.',
			picture: 'https://udemy-images.udemy.com/course/304x171/1263534_780a_4.jpg'
		});
	}

	create(title: string): Promise<Course> {
		return this.httpClient.post<Course>('/CreateCourse', {title}).toPromise();
	}

}