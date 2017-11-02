import { 
	Component, 
	OnInit, 
	Input, 
	Output, 
	EventEmitter 
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { InstructorCourseService } from '../../../../../services';

@Component({
	selector: 'uikit-curriculum-edit-title',
	templateUrl: './curriculum-edit-title.component.html',
	styleUrls: ['./curriculum-edit-title.component.css']
})
export class CurriculumEditTitleComponent implements OnInit {
	@Input() curriculum;

	@Output() save = new EventEmitter<any>();
	@Output() cancel = new EventEmitter<void>();
	@Output() delete = new EventEmitter<void>();

	public editTitleForm: FormGroup;
	public isLoading: boolean = false;
	public isDeleting: boolean = false;

	constructor(private instructorCourseService: InstructorCourseService) { }

	ngOnInit() {
		this.editTitleForm = new FormGroup({
			'title': new FormControl(this.curriculum.title, [
				Validators.required, 
			])
		});
	}

	public onSubmitEditTitleForm() {
		if (!this.editTitleForm.valid) {
			return;
		}

		this.isLoading = true;

		this.curriculum.title = this.editTitleForm.value.title;

		this.instructorCourseService.saveCurriculumItem(this.curriculum)
			.then(() => {
				this.save.emit(this.curriculum);
				this.isLoading = false;
			})
			.catch(() => {
				this.isLoading = false;
			});
	}

	public doDelete() {
		this.isDeleting = true;
		this.delete.emit();
	}

	public doCancel() {
		this.cancel.emit();
	}

}
