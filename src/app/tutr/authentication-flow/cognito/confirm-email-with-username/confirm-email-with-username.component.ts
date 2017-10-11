import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ChangePasswordService } from '../../../services';

@Component({
	selector: 'tutr-confirm-email-with-username',
	templateUrl: './confirm-email-with-username.component.html',
	styleUrls: ['./confirm-email-with-username.component.css']
})
export class ConfirmEmailWithUsernameComponent implements OnInit {
	public form: FormGroup;

	constructor(private changePasswordService: ChangePasswordService,
				private router: Router) { }

	ngOnInit() {
		this.form = new FormGroup({
			'username': new FormControl('', [
				Validators.required
			]),
			'code': new FormControl('', [
				Validators.required
			])
		});
	}

	onSubmit() {
		if (!this.form.valid) {
			return;
		}

		this.changePasswordService.confirmCode(
			this.form.value.username,
			this.form.value.code
		).then(() => {
			this.router.navigate(['/auth', 'login']);
		});
	}

}
