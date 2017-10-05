import { 
	Component, 
	OnInit, 
	Input, 
	Output, 
	EventEmitter 
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

	constructor() { }

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

		this.curriculum.title = this.editTitleForm.value.title;
		this.save.emit(this.curriculum);
	}

	public doCancel() {
		this.cancel.emit();
	}

}
