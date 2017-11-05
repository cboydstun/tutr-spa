import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Consultation } from '../../models';

@Component({
	selector: 'app-schedule-consultation',
	templateUrl: './schedule-consultation.component.html',
	styleUrls: ['./schedule-consultation.component.css']
})
export class ScheduleConsultationComponent implements OnInit {
	public consultation: Consultation;

	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.consultation = data.consultation;
		});
	}
}
