import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../../../services';

@Component({
	selector: 'tutr-login-with-username',
	templateUrl: './login-with-username.component.html',
	styleUrls: ['./login-with-username.component.css']
})
export class LoginWithUsernameComponent implements OnInit {
	public form: FormGroup;

	public isLoading: boolean = false;
	public showError: boolean = false;

	constructor(private loginService: LoginService,
				private router: Router) { }

	ngOnInit() {
		this.form = new FormGroup({
			'username': new FormControl('', [
				Validators.required
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

		this.loginService.authenticate(this.form.value.username, this.form.value.password).then(() => {
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
