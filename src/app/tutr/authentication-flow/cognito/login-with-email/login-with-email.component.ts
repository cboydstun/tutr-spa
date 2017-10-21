import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../../../services';

@Component({
	selector: 'tutr-login-with-email',
	templateUrl: './login-with-email.component.html',
	styleUrls: ['./login-with-email.component.css']
})
export class LoginWithEmailComponent implements OnInit {
	public form: FormGroup;

	public isLoading: boolean = false;
	public showError: boolean = false;

	constructor(private loginService: LoginService,
				private router: Router) { }

	ngOnInit() {
		this.form = new FormGroup({
			'email': new FormControl('', [
				Validators.required,
				Validators.email
			]),
			'password': new FormControl('', [
				Validators.required
			])
		});
	}

	onSubmit() {
		if (!this.form.valid) {
			return;
		}

		this.isLoading = true;
		this.showError = false;

		this.loginService.authenticate(this.form.value.email, this.form.value.password).then(() => {
			this.router.navigate(['/']);
		}).catch((err: string) => {
			this.isLoading = false;

			if (err === LoginService.NEW_PASSWORD_REQUIRED) {
				this.router.navigate(['/auth', 'change-temp-password']);
			} else {
				this.showError = true;
			}
		});

	}

}
