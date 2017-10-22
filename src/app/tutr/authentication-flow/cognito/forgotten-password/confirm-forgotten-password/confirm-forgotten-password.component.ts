import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ChangePasswordService } from '../../../../services';

@Component({
	selector: 'app-confirm-forgotten-password',
	templateUrl: './confirm-forgotten-password.component.html',
	styleUrls: ['./confirm-forgotten-password.component.css']
})
export class ConfirmForgottenPasswordComponent implements OnInit {
	public form: FormGroup;

	public isLoading: boolean = false;

	get email() { return this.form.get('email'); }
	get code() { return this.form.get('code'); }

	constructor(private changePasswordService: ChangePasswordService,
				private router: Router) { }

	ngOnInit() {
		this.form = new FormGroup({
			'email': new FormControl('', [
				Validators.required,
				Validators.email
			]),
			'code': new FormControl('', [
				Validators.required
			]),
			'password': new FormControl('', [
				Validators.required,
				Validators.minLength(8)
			]),
			'confirmpassword': new FormControl('', [
				Validators.required,
				Validators.minLength(8)
			])
		});
	}

	onSubmit() {
		if (!this.form.valid) {
			return;
		}

		this.isLoading = true;

		this.changePasswordService.confirmPassword(
			this.form.value.email,
			this.form.value.code,
			this.form.value.password
		).then(() => {
			this.router.navigate(['/auth', 'login']);
		}).catch((err) => {
			if (err.code === ChangePasswordService.EXPIRED_CODE_EXCEPTION) {
				this.code.setErrors({expired: true});
			}
		}).then(() => this.isLoading = false);
	}

}
