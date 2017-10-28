import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Webinar } from '../../../models';
import { InstructorWebinarService } from '../../../services';

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
				private instructorWebinarService: InstructorWebinarService) { }

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
			'start_dt': new FormControl(this.webinar.start_dt, [
				Validators.required
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
		this.webinar.start_dt = new Date(this.form.value.start_dt);

		this.instructorWebinarService.save(this.webinar)
			.then(() => this.isLoading = false)
			.catch(() => this.isLoading = false);
	}

}
