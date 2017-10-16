import { Component, OnInit, Input } from '@angular/core';

import { Course } from '../../../models';
import { S3Service } from '../../../services';

import { environment } from "../../../../../environments/environment";

@Component({
    selector: 'tutr-user-picture',
    templateUrl: './user-picture.component.html',
    styleUrls: ['./user-picture.component.css']
})
export class UserPictureComponent implements OnInit {
	@Input() profile: any;

	public file: any = null;

	public isUploading: boolean = false;

	public defaultPicture = environment.defaultUserPicture;

	public get hasPictureSelected(): boolean {
		return !!this.file;
	}

    constructor(private s3: S3Service) { }

    ngOnInit() {
    }

	public onCoursePictureChange(event) {
		this.file = event.target.files[0];
	}

	public upload() {
		this.isUploading = true;

		this.s3.uploadProfilePicture(this.profile.id, this.file)
			.then((result) => {
				this.isUploading = false
			})
			.catch(() => this.isUploading = false);
	}
}
