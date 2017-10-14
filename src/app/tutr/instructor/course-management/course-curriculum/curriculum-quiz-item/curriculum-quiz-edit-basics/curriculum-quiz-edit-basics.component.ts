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
	selector: 'uikit-curriculum-quiz-edit-basics',
	templateUrl: './curriculum-quiz-edit-basics.component.html',
	styleUrls: ['./curriculum-quiz-edit-basics.component.css']
})
export class CurriculumQuizEditBasicsComponent implements OnInit {
	@Input() curriculum;

	@Output() save = new EventEmitter<any>();
	@Output() cancel = new EventEmitter<void>();
	@Output() delete = new EventEmitter<void>();

	public editForm: FormGroup;
	public isLoading: boolean = false;

	constructor(private instructorCourseService: InstructorCourseService) { }

	ngOnInit() {
		this.editForm = new FormGroup({
			'title': new FormControl(this.curriculum.title, [
				Validators.required, 
			]),
			'description': new FormControl(this.curriculum.description, [
				Validators.required, 
			])
		});
	}

	public onSubmitEditTitleForm() {
		if (!this.editForm.valid) {
			return;
		}

		this.isLoading = true;

		this.curriculum.title = this.editForm.value.title;
		this.curriculum.description = this.editForm.value.description;

		this.instructorCourseService.saveCurriculumItem(this.curriculum)
			.then(() => {
				this.save.emit(this.curriculum);
				this.isLoading = false;
			}).catch(() => {
				this.isLoading = false
			});
	}

	public doCancel() {
		this.cancel.emit();
	}
}
