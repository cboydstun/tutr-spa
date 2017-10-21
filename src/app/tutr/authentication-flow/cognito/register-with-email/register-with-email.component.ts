import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RegisterService } from '../../../services';

@Component({
	selector: 'tutr-register-with-email',
	templateUrl: './register-with-email.component.html',
	styleUrls: ['./register-with-email.component.css']
})
export class RegisterWithEmailComponent implements OnInit {
	public form: FormGroup;

	public isLoading: boolean = false;

	constructor(private registerService: RegisterService,
				private router: Router) { }

	get email() { return this.form.get('email') }

	ngOnInit() {
		this.form = new FormGroup({
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
					this.email.setErrors({exists: true});
				} else {

				}
			});
	}

}
