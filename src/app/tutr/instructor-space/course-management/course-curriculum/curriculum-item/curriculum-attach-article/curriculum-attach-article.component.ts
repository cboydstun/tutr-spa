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
	selector: 'uikit-curriculum-attach-article',
	templateUrl: './curriculum-attach-article.component.html',
	styleUrls: ['./curriculum-attach-article.component.css']
})
export class CurriculumAttachArticleComponent implements OnInit {
	@Input() curriculum;

	@Output() save = new EventEmitter<any>();
	@Output() cancel = new EventEmitter<void>();

	public editArticleForm: FormGroup;
	public isLoading: boolean = false;

	constructor(private instructorCourseService: InstructorCourseService) { }

	ngOnInit() {
		this.editArticleForm = new FormGroup({
			'content': new FormControl(this.curriculum.content, [
				Validators.required, 
			])
		});
	}

	public onSubmitEditArticleForm() {
		if (!this.editArticleForm.valid) {
			return;
		}

		this.curriculum.content_type = 'article';
		this.curriculum.content = this.editArticleForm.value.content;

		this.isLoading = true;

		this.instructorCourseService.saveCurriculumItem(this.curriculum)
			.then(() => {
				this.save.emit(this.curriculum);
				this.isLoading = false;
			})
			.catch(() => {
				this.isLoading = false;
			});
	}

	public turnOnNormalMode() {
		this.cancel.emit();
	}

}
