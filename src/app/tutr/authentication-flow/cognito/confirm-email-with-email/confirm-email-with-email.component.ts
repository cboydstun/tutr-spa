import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ChangePasswordService } from '../../../services';

@Component({
	selector: 'tutr-confirm-email-with-email',
	templateUrl: './confirm-email-with-email.component.html',
	styleUrls: ['./confirm-email-with-email.component.css']
})
export class ConfirmEmailWithEmailComponent implements OnInit {
	public form: FormGroup;

	public isLoading: boolean = false;
	public showError: boolean = false;

	constructor(private changePasswordService: ChangePasswordService,
				private router: Router) { }

	get code() { return this.form.get('code'); }

	ngOnInit() {
		this.form = new FormGroup({
			'email': new FormControl('', [
				Validators.required,
				Validators.email
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

		this.isLoading = true;
		this.showError = false;

		this.changePasswordService.confirmRegistration(
			this.form.value.email,
			this.form.value.code
		).then(() => {
			this.router.navigate(['/auth', 'login']);
		}).catch((err) => {
			this.isLoading = false;

			if (err.code === ChangePasswordService.CODE_MISMATCH) {
				this.code.setErrors({mismatch: true});
			} else if (err.code === ChangePasswordService.USER_NOT_FOUND) {
				this.showError = true;
			}
		});
	}

}
