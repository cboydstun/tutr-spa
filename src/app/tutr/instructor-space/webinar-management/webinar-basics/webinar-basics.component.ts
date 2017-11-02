import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Webinar } from '../../../models';
import { InstructorWebinarService } from '../../../services';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
	selector: 'tutr-webinar-basics',
	templateUrl: './webinar-basics.component.html',
	styleUrls: ['./webinar-basics.component.css']
})
export class WebinarBasicsComponent implements OnInit {
	public webinar: Webinar;
	public form: FormGroup;

	public isLoading: boolean = false;

	constructor(private activatedRoute: ActivatedRoute,
				private instructorWebinarService: InstructorWebinarService,
				private toastr: ToastsManager) { }

	ngOnInit() {
		this.activatedRoute.parent.data.subscribe(data => {
			this.webinar = data.webinar;
		});

		this.form = new FormGroup({
			'title': new FormControl(this.webinar.title, [
				Validators.required, 
			]),
			'subtitle': new FormControl(this.webinar.subtitle, [
				Validators.required
			]),
			'description': new FormControl(this.webinar.description, [
				Validators.required
			]),
			'duration': new FormControl(this.webinar.duration, [
				Validators.required
			]),
			'start_dt': new FormControl(this.stringifyDate(this.webinar.start_dt), [
				Validators.required
			]),
			'start_t': new FormControl(this.stringifyTime(this.webinar.start_dt), [
				Validators.required,
				WebinarBasicsComponent.timeValidator
			])
		});
	}

	onSubmit() {
		if (!this.form.valid) {
			return;
		}

		this.isLoading = true;

		this.webinar.title = this.form.value.title;
		this.webinar.subtitle = this.form.value.subtitle;
		this.webinar.description = this.form.value.description;
		this.webinar.duration = this.form.value.duration;

		this.webinar.start_dt = this.combineDateAndTime(
			new Date(this.form.value.start_dt),
			this.form.value.start_t
		);

		this.instructorWebinarService.save(this.webinar)
			.then(() => {
				this.toastr.success('Saved');
				this.isLoading = false
			})
			.catch(() => this.isLoading = false);
	}

	private combineDateAndTime(date: Date, time: string): Date {
		let parts = time.split(':');
		let hh = parseInt(parts[0], 10);
		let mm = parseInt(parts[1], 10);

		date.setHours(hh);
		date.setMinutes(mm);

		return date;
	}

	private stringifyDate(date: Date): string {
		let mm = date.getMonth() + 1;
		let dd = date.getDate();

		return [
			date.getFullYear(),
			(mm > 9 ? '' : '0') + mm,
			(dd > 9 ? '' : '0') + dd
		].join('-');
	}

	private stringifyTime(date: Date): string {
		const pad = (i: number) => i < 10 ? `0${i}` : i;

		return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
	}

	static timeValidator(c: FormControl): any {
		let valid = /^[0-9]{2}:[0-9]{2}$/.test(c.value);

		return valid ? null : {
			time: true
		};
	}

}
