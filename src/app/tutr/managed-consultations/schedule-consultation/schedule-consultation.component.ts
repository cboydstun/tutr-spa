import { rrulestr, RRule } from 'rrule';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LoginService, ConsultationBookingService } from '../../services';

import { Consultation } from '../../models';

@Component({
	selector: 'tutr-schedule-consultation',
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
				private loginService: LoginService,
				private router: Router,
				private consultationBookingService: ConsultationBookingService) { }

	ngOnInit() {
		this.activatedRoute.parent.data.subscribe(data => {
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
		this.isLoading = true;
		this.occurrences = [];

		this.consultationBookingService.listBookedSlots(
			this.consultation.id,
			range.from,
			range.to
		).then((slots) => {
			this.isLoading = false;

			this.buildOccurrences(range);

			slots.forEach(slot => {
				const occurrence = this.occurrences.find(o => o.date.getTime() === slot.getTime());

				if (!!occurrence) {
					occurrence.isBooked = true;
				}
			});
		}).catch(() => {
			this.isLoading = false;
		});
	}

	public onSubmit() {
		if (!this.form.valid || this.isLoading) {
			return;
		}

		if (!this.isAuthenticated) {
			return;
		}

		this.isLoading = true;

		this.consultationBookingService.book(
			this.consultation.id, 
			new Date(this.form.value.occurrence)
		).then(() => {
			this.router.navigate([
				'/managed-consultations', 
				'schedule', 
				this.consultation.id, 
				'success'
			]);
		}).catch(() => {
			this.isLoading = false;
		});
	}

	private buildOccurrences(range: {from: Date, to: Date}): void {
		this.occurrences = this.rrule.between(range.from, range.to)
			.map(item => {
				const dt = new Date(item);
				dt.setMilliseconds(0);

				return {
					date: dt,
					str: item,
					isBooked: false
				};
			});
	}
}
