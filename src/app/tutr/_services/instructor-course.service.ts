import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import { 
	Course, 
	CourseGoals 
} from '../models';

import { environment } from "../../../environments/environment";

import { NgProgressService } from 'ngx-progressbar';

@Injectable()
export class InstructorCourseService {
	constructor(private httpClient: HttpClient) { }

	forInstructor() : Promise<Course[]> {
		return this.httpClient.get<Course[]>('/ListInstructorDashboardCourses').toPromise().then(list => {
			return list.map(listItem => {
				listItem.picture = listItem.picture || environment.defaultCourseImage;
				return listItem;
			});
		});
	}

	get(id: string): Promise<Course> {
		const params = new HttpParams().set('id', id);
		return this.httpClient.get<Course>('/DescribeInstructorDashboardCourse', {params}).toPromise().then(item => {
				item.picture = item.picture || environment.defaultCourseImage;
				return item;
		});
	}

	getGoals(id: string): Promise<CourseGoals> {
		const params = new HttpParams().set('id', id);
		return this.httpClient.get<CourseGoals>('/DescribeInstructorDashboardCourseGoals', {params}).toPromise();
	}

	setGoals(goals: CourseGoals): Promise<CourseGoals> {
		return this.httpClient.post<CourseGoals>('/SaveInstructorDashboardCourseGoals', goals).toPromise();	
	}


	save(course: Course): Promise<Course> {
		return this.httpClient.post<Course>('/SaveInstructorDashboardCourse', course).toPromise();
	}

	getCurriculums(id: string): Promise<any> {
		const params = new HttpParams().set('id', id);
		return this.httpClient.get<CourseGoals>('/DescribeInstructorDashboardCourseCurriculum', {params}).toPromise();
	}

	addCurriculumItem(item: any): Promise<any> {
		return this.httpClient.post('/CreateCurriculumItem', item).toPromise();
	}

	saveCurriculumItem(item: any): Promise<any> {
		return this.httpClient.post('/SaveCurriculumItem', item).toPromise();
	}

}