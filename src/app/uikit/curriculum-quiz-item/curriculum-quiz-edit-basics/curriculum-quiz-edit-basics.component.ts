import { 
	Component, 
	OnInit, 
	Input, 
	Output, 
	EventEmitter 
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

	constructor() { }

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

		this.curriculum.title = this.editForm.value.title;
		this.curriculum.description = this.editForm.value.description;
		this.save.emit(this.curriculum);
	}

	public doCancel() {
		this.cancel.emit();
	}
}
