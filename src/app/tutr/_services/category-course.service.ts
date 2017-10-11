import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import { Course } from '../models';

@Injectable()
export class CategoryCourseService {
	constructor(private httpClient: HttpClient) { }

	forCategory(slug: string) : Promise<Course[]> {
		const params = new HttpParams().set('category', slug);
		return this.httpClient.get<Course[]>('/ListCoursesByCategory', {params}).toPromise();
	}

	get(slug: string): Promise<Course> {
		return Promise.resolve({
			title: 'Learning Path: Mastering Ember.js Application Development',
			subtitle: 'The Complete Ember 2 Developer Course',
			slug: 'learning-path-mastering-emberjs-application-development',
			description: 'Learn how to build ambitious single-page web applications using the power of Ember.js and Ember CLI.',
			picture: 'https://udemy-images.udemy.com/course/304x171/1263534_780a_4.jpg'
		});
	}

}