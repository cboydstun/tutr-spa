import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import { Consultation } from '../models';

@Injectable()
export class ConsultationBookingService {
	constructor(private httpClient: HttpClient) { }

	book(consultation_id: string, slot_dt: Date): Promise<any> {
		return this.httpClient.post('/ScheduleConsultation', {
			consultation_id, 
			slot_dt: slot_dt.toISOString()
		}).toPromise();
	}

	listBookedSlots(consultation_id: string, from: Date, to: Date): Promise<Date[]> {
		const params = new HttpParams()
			.set('id', consultation_id)
			.set('from', from.toISOString())
			.set('to', to.toISOString());

		return this.httpClient.get<{slot_dt: string}[]>('/ListConsultationBookings', {params}).toPromise()
			.then(slots => slots.map(slot => new Date(slot.slot_dt)));
	}

}