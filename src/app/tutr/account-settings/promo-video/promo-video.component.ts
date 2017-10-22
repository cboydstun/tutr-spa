import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { UserProfileService, S3Service } from '../../services';
import { Profile } from '../../models';

@Component({
	selector: 'app-promo-video',
	templateUrl: './promo-video.component.html',
	styleUrls: ['./promo-video.component.css']
})
export class PromoVideoComponent implements OnInit {
	public profile: Profile;
	public form: FormGroup;

	public file: any;
	public isUploading: boolean = false;

	constructor(private activatedRoute: ActivatedRoute,
				private userProfileService: UserProfileService,
				private s3Service: S3Service) { }

	ngOnInit() {
		this.activatedRoute.parent.data.subscribe(data => {
			this.profile = data.profile;
		});

		this.form = new FormGroup({
			'file': new FormControl('', [
				Validators.required, 
			])
		});
	}

	public onFileChange(event) {
		this.file = event.target.files[0];
		this.form.controls['file'].setValue(this.file ? this.file.name : '');
	}

	public onSubmit() {
		if (!this.form.valid) {
			return;
		}

		this.isUploading = true;

		this.s3Service.uploadPromoVideo(this.profile.id, this.file)
			.then(() => this.isUploading = false)
			.catch(() => this.isUploading = false);
	}

}
