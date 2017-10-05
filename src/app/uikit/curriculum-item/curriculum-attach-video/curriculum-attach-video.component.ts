import { 
	Component, 
	OnInit, 
	Input, 
	Output, 
	EventEmitter 
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

	constructor() { }

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

		this.curriculum.contentType = 'video';

		this.save.emit(this.curriculum);
	}

	public onFileChange(event) {
		const file = event.target.files[0];
		this.editVideoForm.controls['file'].setValue(file ? file.name : '');
	}

	public deleteVideo() {
		this.delete.emit();
	}

	public turnOnNormalMode() {
		this.cancel.emit();
	}

}
