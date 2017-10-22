import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ChangePasswordService } from '../../../services';

@Component({
	selector: 'app-forgotten-password',
	templateUrl: './forgotten-password.component.html',
	styleUrls: ['./forgotten-password.component.css']
})
export class ForgottenPasswordComponent implements OnInit {
	public form: FormGroup;

	public isLoading: boolean = false;

	get email() { return this.form.get('email'); }

	constructor(private changePasswordService: ChangePasswordService,
				private router: Router) { }

	ngOnInit() {
		this.form = new FormGroup({
			'email': new FormControl('', [
				Validators.required,
				Validators.email
			])
		});
	}

	onSubmit() {
		if (!this.form.valid) {
			return;
		}

		this.isLoading = true;

		this.changePasswordService.forgottenPassword(this.form.value.email).then(() => {
			this.router.navigate(['/auth', 'forgotten-password', 'confirm']);
		}).catch(() => {
			this.email.setErrors({notFound: true});
		}).then(() => this.isLoading = false);

	}

}
