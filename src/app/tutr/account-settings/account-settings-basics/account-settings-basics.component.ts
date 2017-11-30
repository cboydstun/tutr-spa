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

	public isSaving: boolean = false;

	constructor(private activatedRoute: ActivatedRoute,
				private userProfileService: UserProfileService) { }

	ngOnInit() {
		this.activatedRoute.parent.data.subscribe(data => {
			this.profile = data.profile;
		});

		this.form = new FormGroup({
			'given_name': new FormControl(this.profile.given_name, [
				Validators.required, 
			]),
			'family_name': new FormControl(this.profile.family_name, [
				Validators.required
			]),
			'headline':  new FormControl(this.profile.headline, [
				Validators.required
			]),
			'bio':  new FormControl(this.profile.bio, [
				Validators.required
			]),
		});
	}

	onSubmit() {
		if (!this.form.valid) {
			return;
		}

		this.isSaving = true;

		this.userProfileService.updateProfile(this.form.value)
			.then(() => {
				this.isSaving = false;
			})
			.catch(() => this.isSaving = false);
	}
}
