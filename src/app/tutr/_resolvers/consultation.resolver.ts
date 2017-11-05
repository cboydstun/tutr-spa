import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Consultation } from '../models';
import { ConsultationService } from '../services';

@Injectable()
export class ConsultationResolve implements Resolve<Consultation> {

	constructor(private consultationService: ConsultationService) { }

	resolve(route: ActivatedRouteSnapshot) {
		return this.consultationService.get(route.params.id);
	}
}