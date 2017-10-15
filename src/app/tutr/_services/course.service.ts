import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import { Course } from '../models';

@Injectable()
export class CourseService {
	constructor(private httpClient: HttpClient) { }

	get(instructor_id: string, id: string): Promise<Course> {
		const params = new HttpParams().set('id', id).set('instructor_id', instructor_id);
		return this.httpClient.get<Course>('/DescribeCourse', {params}).toPromise();
	}

	create(title: string): Promise<Course> {
		return this.httpClient.post<Course>('/CreateCourse', {title}).toPromise();
	}

}