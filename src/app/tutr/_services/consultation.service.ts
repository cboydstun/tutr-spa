import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import { Consultation } from '../models';

@Injectable()
export class ConsultationService {
	constructor(private httpClient: HttpClient) { }

	all(): Promise<Consultation[]> {
		return Promise.resolve([
			{
				id: '1',
				title: 'sdlkfj skdlf sdkjl fsd fjlskd jflk'
			},
			{
				id: '2',
				title: 'sdlkfj skdlf sdkjl fsd fjlskd jflk'
			}
		]);
	}

	get(id: string): Promise<Consultation> {
		return Promise.resolve({
			id: '1',
			title: 'sdlkfj skdlf sdkjl fsd fjlskd jflk',
			rrule: 'FREQ=WEEKLY;COUNT=30;WKST=MO;BYDAY=TH;BYHOUR=12,13;BYMINUTE=0;BYSECOND=0',
			description: 'slfk skldf sdklf jsdklf sjdf sdkf sdjf sdklf sdjklf sdkl'
		});
	}

}