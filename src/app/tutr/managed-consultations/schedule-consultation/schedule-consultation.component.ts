import { rrulestr, RRule } from 'rrule';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Consultation } from '../../models';

@Component({
	selector: 'app-schedule-consultation',
	templateUrl: './schedule-consultation.component.html',
	styleUrls: ['./schedule-consultation.component.css']
})
export class ScheduleConsultationComponent implements OnInit {
	public consultation: Consultation;
	public rrule: RRule;
	public occurrences: any[];

	public form: FormGroup;
	public isLoading: boolean = false;

	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.consultation = data.consultation;
		});

		this.form = new FormGroup({
			'occurrence': new FormControl('', [
				Validators.required, 
			]),
		});

		this.rrule = rrulestr(this.consultation.rrule);
	}

	public onDateChange(range: {from: Date, to: Date}) {
		this.buildOccurrences(range);
	}

	public onSubmit() {
		if (!this.form.valid || this.isLoading) {
			return;
		}

		this.isLoading = true;
	}

	private buildOccurrences(range: {from: Date, to: Date}): void {
		this.occurrences = this.rrule.between(range.from, range.to)
			.map(item => {
				return {
					date: new Date(item),
					str: item
				};
			});
	}
}
