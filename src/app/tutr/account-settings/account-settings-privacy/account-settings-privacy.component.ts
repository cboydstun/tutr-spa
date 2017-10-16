import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { UserProfileService } from '../../services';

@Component({
	selector: 'tutr-account-settings-privacy',
	templateUrl: './account-settings-privacy.component.html',
	styleUrls: ['./account-settings-privacy.component.css']
})
export class AccountSettingsPrivacyComponent implements OnInit {
	public profile: any;
	public form: FormGroup;

	constructor(private activatedRoute: ActivatedRoute,
				private userProfileService: UserProfileService) { }

	ngOnInit() {
		this.activatedRoute.parent.data.subscribe(data => {
			this.profile = data.profile;
		});

		this.form = new FormGroup({
			'profile_public': new FormControl(false, [
				Validators.required 
			]),
			'courses_public': new FormControl(false, [
				Validators.required
			])
		});
	}

	onSubmit() {
		if (!this.form.valid) {
			return;
		}

		//this.userProfileService.updateAttributes(this.form.value);
	}
}
