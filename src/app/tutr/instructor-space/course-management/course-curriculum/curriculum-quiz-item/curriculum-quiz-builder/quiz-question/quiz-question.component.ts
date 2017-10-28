import { 
	Component, 
	OnInit, 
	Input, 
	Output, 
	EventEmitter 
} from '@angular/core';

import { 
	FormGroup, 
	FormControl, 
	Validators 
} from '@angular/forms';

const MODES = {
	VIEW: 1,
	EDIT: 2
}

@Component({
	selector: 'uikit-quiz-question',
	templateUrl: './quiz-question.component.html',
	styleUrls: ['./quiz-question.component.css']
})
export class QuizQuestionComponent implements OnInit {
	@Input() question: any;

	@Output() onRemove = new EventEmitter<any>();

	private mode: number = MODES.VIEW;

	public editForm: FormGroup;

	constructor() { }

	ngOnInit() {
		this.editForm = new FormGroup({
			'title': new FormControl(this.question.title, [
				Validators.required, 
			]),
			'type': new FormControl(this.question.type || 'multiple', [
				Validators.required, 
			])
		});

		if (!this.question.title) {
			this.mode = MODES.EDIT;
		}
	}

	public onSubmitEditForm() {
		if (!this.editForm.valid) {
			return;
		}

		this.question.title = this.editForm.value.title;
		this.question.type = this.editForm.value.type;

		this.turnOnViewMode();
	}

	public isViewMode(): boolean {
		return this.mode === MODES.VIEW;
	}

	public isEditMode(): boolean {
		return this.mode === MODES.EDIT;
	}

	public turnOnViewMode() {
		this.mode = MODES.VIEW;
	}

	public turnOnEditMode() {
		this.mode = MODES.EDIT;
	}

	public remove() {
		this.onRemove.emit(this.question);
	}
}
