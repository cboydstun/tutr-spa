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
			answers: []
		});
	}

	public save() {
		this.isSaving = true;

		this.instructorCourseService.saveCurriculumItem(this.curriculum)
			.then(() => this.isSaving = false)
			.catch(() => this.isSaving = false);
	}

}
