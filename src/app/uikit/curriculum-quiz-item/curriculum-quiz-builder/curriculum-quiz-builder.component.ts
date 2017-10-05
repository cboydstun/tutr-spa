import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'uikit-curriculum-quiz-builder',
	templateUrl: './curriculum-quiz-builder.component.html',
	styleUrls: ['./curriculum-quiz-builder.component.css']
})
export class CurriculumQuizBuilderComponent implements OnInit {
	@Input() curriculum: any;

	public questions: any[] = [];

	constructor() { }

	ngOnInit() {
	}

	public addQuestion() {
		this.questions.push({});
	}

}
