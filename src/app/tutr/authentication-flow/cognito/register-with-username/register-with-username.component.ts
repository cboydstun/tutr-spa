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

	constructor(private registerService: RegisterService,
				private router: Router) { }

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
				Validators.required
			]),
			'confirmpassword': new FormControl('', [
				Validators.required
			])
		});
	}

	onSubmit() {
		if (!this.form.valid) {
			return;
		}

		this.registerService.register(this.form.value)
			.then(() => {
				this.router.navigate(['/auth', 'confirm-registration']);
			})
			.catch((err) => {
				debugger
			});
	}

}
