import { 
	Component, 
	OnInit, 
	Input, 
	Output, 
	EventEmitter 
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'uikit-curriculum-attach-article',
	templateUrl: './curriculum-attach-article.component.html',
	styleUrls: ['./curriculum-attach-article.component.css']
})
export class CurriculumAttachArticleComponent implements OnInit {
	@Input() curriculum;

	@Output() save = new EventEmitter<any>();
	@Output() cancel = new EventEmitter<void>();
	@Output() delete = new EventEmitter<void>();

	public editArticleForm: FormGroup;

	constructor() { }

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

		this.curriculum.contentType = 'article';
		this.curriculum.content = this.editArticleForm.value.content;

		this.save.emit(this.curriculum);
	}

	public deleteArticle() {
		this.delete.emit();
	}

	public turnOnNormalMode() {
		this.cancel.emit();
	}

}
