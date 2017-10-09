import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'uikit-quiz-answer-group',
	templateUrl: './quiz-answer-group.component.html',
	styleUrls: ['./quiz-answer-group.component.css']
})
export class QuizAnswerGroupComponent implements OnInit {
	@Input() answers: any[] = [];

	constructor() { }

	ngOnInit() {
		if (!this.answers.length) {
			this.addAnswer();
		}
	}

	public addAnswer() {
		this.answers.push({});
	}

}
