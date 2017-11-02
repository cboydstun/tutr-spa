import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import { CurriculumItem } from '../models';

@Injectable()
export class CurriculumService {
	constructor(private httpClient: HttpClient) { }

	getCurriculum(id: string): Promise<any> {
		const params = new HttpParams().set('id', id);
		return this.httpClient.get<CurriculumItem[]>('/DescribeCurriculumItem', {params}).toPromise().then(item => new CurriculumItem(item));
	}

	saveQuizResults(results) {
		return this.httpClient.post('/SaveQuizResults', results).toPromise();
	}

	delete(id: string): Promise<any> {
		return this.httpClient.post('/DeleteCurriculumItem', {id}).toPromise();
	}

}