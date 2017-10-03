import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { UserProfileService } from '../../services';

@Component({
	selector: 'tutr-account-settings-basics',
	templateUrl: './account-settings-basics.component.html',
	styleUrls: ['./account-settings-basics.component.css']
})
export class AccountSettingsBasicsComponent implements OnInit {
	public profile: any;
	public form: FormGroup;

	constructor(private activatedRoute: ActivatedRoute,
				private userProfileService: UserProfileService) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.profile = data.profile;
		});

		this.form = new FormGroup({
			'given_name': new FormControl(this.profile.given_name, [
				Validators.required, 
			]),
			'family_name': new FormControl(this.profile.family_name, [
				Validators.required
			])
		});
	}

	onSubmit() {
		if (!this.form.valid) {
			return;
		}

		this.userProfileService.updateAttributes(this.form.value);
	}
}
