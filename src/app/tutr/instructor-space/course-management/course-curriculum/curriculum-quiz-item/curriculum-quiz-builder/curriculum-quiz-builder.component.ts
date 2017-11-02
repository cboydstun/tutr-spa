import { Component, OnInit, Input } from '@angular/core';

import { InstructorCourseService } from '../../../../../services';

@Component({
	selector: 'uikit-curriculum-quiz-builder',
	templateUrl: './curriculum-quiz-builder.component.html',
	styleUrls: ['./curriculum-quiz-builder.component.css']
})
export class CurriculumQuizBuilderComponent implements OnInit {
	@Input() curriculum: any;

	public isSaving: boolean = false;

	constructor(private instructorCourseService: InstructorCourseService) { }

	ngOnInit() {
	}

	public addQuestion() {
		this.curriculum.questions.push({
			answers: [],
			id: this.curriculum.questions.length
		});
	}

	public save() {
		this.isSaving = true;

		this.instructorCourseService.saveCurriculumItem(this.curriculum)
			.then(() => this.isSaving = false)
			.catch(() => this.isSaving = false);
	}

	public removeQuestion(question) {
		for (var i = this.curriculum.questions.length - 1; i >= 0; i--) {
			if (question === this.curriculum.questions[i]) {
				this.curriculum.questions.splice(i, 1);
				return;
			}
		}
	}

}
