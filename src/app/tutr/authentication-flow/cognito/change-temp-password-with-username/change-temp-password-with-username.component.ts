import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { ChangePasswordService } from '../../../services';

@Component({
	selector: 'app-change-temp-password-with-username',
	templateUrl: './change-temp-password-with-username.component.html',
	styleUrls: ['./change-temp-password-with-username.component.css']
})
export class ChangeTempPasswordWithUsernameComponent implements OnInit {
	public form: FormGroup;

	constructor(private changePasswordService: ChangePasswordService,
				private router: Router) { }

	ngOnInit() {
		this.form = new FormGroup({
			'username': new FormControl('', [
				Validators.required
			]),
			'temppassword': new FormControl('', [
				Validators.required
			]),
			'newpassword': new FormControl('', [
				Validators.required
			])
		});
	}

	onSubmit() {
		if (!this.form.valid) {
			return;
		}

		this.changePasswordService.changeTempPassword(
			this.form.value.username,
			this.form.value.temppassword,
			this.form.value.newpassword,
		).then(() => {
			this.router.navigate(['/']);
		});
	}

}
