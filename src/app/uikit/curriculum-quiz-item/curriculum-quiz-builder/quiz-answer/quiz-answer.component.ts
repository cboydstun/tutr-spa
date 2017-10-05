import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'uikit-quiz-answer',
	templateUrl: './quiz-answer.component.html',
	styleUrls: ['./quiz-answer.component.css']
})
export class QuizAnswerComponent implements OnInit {
	@Input() answer: any;

	constructor() { }

	ngOnInit() {
	}

}
