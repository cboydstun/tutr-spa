import { Component, OnInit, Input } from '@angular/core';

import { Course } from '../../../../models';
import { S3Service } from '../../../../services';

@Component({
    selector: 'tutr-course-picture',
    templateUrl: './course-picture.component.html',
    styleUrls: ['./course-picture.component.css']
})
export class CoursePictureComponent implements OnInit {
	@Input() course: Course;

	public file: any = null;

	public isUploading: boolean = false;

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

		this.s3.uploadCoursePicture(this.course.id, this.file)
			.then((result) => {
				this.isUploading = false
			})
			.catch(() => this.isUploading = false);
	}
}
