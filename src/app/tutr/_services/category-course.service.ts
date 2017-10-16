import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import { Course } from '../models';

@Injectable()
export class CategoryCourseService {
	constructor(private httpClient: HttpClient) { }

	forCategory(slug: string) : Promise<Course[]> {
		const params = new HttpParams().set('category', slug);
		return this.httpClient.get<Course[]>('/ListCoursesByCategory', {params}).toPromise().then(list => list.map(item => new Course(item)));
	}

}