import { rrulestr, RRule } from 'rrule';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LoginService } from '../../services';

import { Consultation } from '../../models';

@Component({
	selector: 'app-schedule-consultation',
	templateUrl: './schedule-consultation.component.html',
	styleUrls: ['./schedule-consultation.component.css']
})
export class ScheduleConsultationComponent implements OnInit, OnDestroy {
	public consultation: Consultation;
	public rrule: RRule;
	public occurrences: any[];

	public isAuthenticated: boolean = false;

	public form: FormGroup;
	public isLoading: boolean = false;

	private isAuthenticatedSubscription: any;

	constructor(private activatedRoute: ActivatedRoute,
				private loginService: LoginService) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.consultation = data.consultation;
		});

		this.isAuthenticatedSubscription = this.loginService.isAuthenticated.subscribe((status: boolean) => {
			this.isAuthenticated = status;
		});

		this.form = new FormGroup({
			'occurrence': new FormControl('', [
				Validators.required, 
			]),
		});

		this.rrule = rrulestr(this.consultation.rrule);
	}

	ngOnDestroy() {
		this.isAuthenticatedSubscription.unsubscribe();
	}

	public onDateChange(range: {from: Date, to: Date}) {
		this.buildOccurrences(range);
	}

	public onSubmit() {
		if (!this.form.valid || this.isLoading) {
			return;
		}

		if (!this.isAuthenticated) {
			return;
		}

		this.isLoading = true;
	}

	private buildOccurrences(range: {from: Date, to: Date}): void {
		this.occurrences = this.rrule.between(range.from, range.to)
			.map(item => {
				return {
					date: new Date(item),
					str: item,
					isBooked: false
				};
			});
	}
}
