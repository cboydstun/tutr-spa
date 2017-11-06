import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import { Consultation } from '../models';

@Injectable()
export class ConsultationService {
	constructor(private httpClient: HttpClient) { }

	all(): Promise<Consultation[]> {
		return this.httpClient.get<Consultation[]>('/ListConsultations').toPromise();
	}

	get(id: string): Promise<Consultation> {
		const params = new HttpParams()
			.set('id', id);

		return this.httpClient.get<Consultation>('/DescribeConsultation', {params}).toPromise();
	}

}