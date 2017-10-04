import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'tutr-working-title-form',
	templateUrl: './working-title-form.component.html',
	styleUrls: ['./working-title-form.component.css']
})
export class WorkingTitleFormComponent implements OnInit {
	@Input() placeholder: string;

	@Output() save = new EventEmitter<string>();

	public form: FormGroup;

	constructor() { }

	ngOnInit() {
		this.form = new FormGroup({
			'title': new FormControl('', [
				Validators.required, 
			]),
		});
	}

	onSubmit() {
		if (!this.form.valid) {
			return;
		}

		this.save.emit(this.form.value.title);
	}

}
