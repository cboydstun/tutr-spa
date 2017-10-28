import { 
	Component, 
	OnInit, 
	Input, 
	Output, 
	EventEmitter 
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { S3Service, InstructorCourseService } from '../../../../../services';

@Component({
	selector: 'uikit-curriculum-attach-video',
	templateUrl: './curriculum-attach-video.component.html',
	styleUrls: ['./curriculum-attach-video.component.css']
})
export class CurriculumAttachVideoComponent implements OnInit {
	@Input() curriculum;

	@Output() save = new EventEmitter<any>();
	@Output() cancel = new EventEmitter<void>();
	@Output() delete = new EventEmitter<void>();

	public editVideoForm: FormGroup;
	public file: any;
	public isUploading: boolean = false;

	constructor(private s3Service: S3Service,
				private instructorCourseService: InstructorCourseService) { }

	ngOnInit() {
		this.editVideoForm = new FormGroup({
			'file': new FormControl('', [
				Validators.required, 
			])
		});
	}

	public onSubmitEditVideoForm() {
		if (!this.editVideoForm.valid) {
			return;
		}

		this.isUploading = true;

		this.s3Service.uploadVideoLecture(
			this.curriculum.course_id, 
			this.curriculum.id, 
			this.file
		).then(() => {
			this.curriculum.content_type = 'video';

			this.instructorCourseService.saveCurriculumItem(this.curriculum)
				.then(() => {
					this.isUploading = false;
					this.save.emit(this.curriculum);
				})
				.catch(() => this.isUploading = false);

		}).catch((err) => {
			this.isUploading = false;
		});
	}

	public onFileChange(event) {
		this.file = event.target.files[0];
		this.editVideoForm.controls['file'].setValue(this.file ? this.file.name : '');
	}

	public deleteVideo() {
		this.delete.emit();
	}

	public turnOnNormalMode() {
		this.cancel.emit();
	}

}
