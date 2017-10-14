import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RegisterService } from '../../../services';

@Component({
	selector: 'tutr-register-with-username',
	templateUrl: './register-with-username.component.html',
	styleUrls: ['./register-with-username.component.css']
})
export class RegisterWithUsernameComponent implements OnInit {
	public form: FormGroup;

	public isLoading: boolean = false;

	constructor(private registerService: RegisterService,
				private router: Router) { }

	get username() { return this.form.get('username') }

	ngOnInit() {
		this.form = new FormGroup({
			'username': new FormControl('', [
				Validators.required, 
			]),
			'email': new FormControl('', [
				Validators.required, 
				Validators.email
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

		this.registerService.register(this.form.value)
			.then(() => {
				this.router.navigate(['/auth', 'confirm-registration']);
			})
			.catch((err) => {
				this.isLoading = false;

				if (err.code === RegisterService.USERNAME_EXISTS) {
					this.username.setErrors({exists: true});
				} else {

				}
			});
	}

}
