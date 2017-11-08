import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { ConsultationBooking } from '../models';
import { ConsultationBookingService } from '../services';



@Injectable()
export class ConsultationBookingResolve implements Resolve<ConsultationBooking> {

	constructor(private consultationBookingService: ConsultationBookingService) { }

	resolve(route: ActivatedRouteSnapshot) {
		
		return this.consultationBookingService.get(route.params.id);
	}
}