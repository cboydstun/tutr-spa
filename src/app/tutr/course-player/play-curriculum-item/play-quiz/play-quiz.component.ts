import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const STATE = {
	NOT_STARTED: 1,
	STARTED: 2,
	COMPLETED: 3
}

@Component({
	selector: 'tutr-play-quiz',
	templateUrl: './play-quiz.component.html',
	styleUrls: ['./play-quiz.component.css']
})
export class PlayQuizComponent implements OnInit {
	@Input() lesson: any;

	private currQuestionIndex: 0;
	private state = STATE.NOT_STARTED;

	public get isStarted(): boolean {
		return this.state == STATE.STARTED;
	}

	public get isNotStarted(): boolean {
		return this.state == STATE.NOT_STARTED;
	}

	public get isCompleted(): boolean {
		return this.state == STATE.COMPLETED;
	}

	public get currQuestion(): any {
		return this.lesson.questions[this.currQuestionIndex];
	}

	constructor() { }

	ngOnInit() {
	}

	public startQuiz() {
		this.state = STATE.STARTED;
		this.currQuestionIndex = 0;
	}

	public nextQuestion() {
		this.currQuestionIndex += 1;
	}

	public hasNextQuestion(): boolean {
		return this.currQuestionIndex < this.lesson.questions.length - 1;
	}

	public prevQuestion() {
		this.currQuestionIndex += -1;
	}

	public hasPrevQuestion(): boolean {
		return this.currQuestionIndex > 0;
	}

	public isLastQuestion(): boolean {
		return !this.hasNextQuestion();
	}

	public questionAnswered(): boolean {
		return false;
	}

	public completeQuiz() {
		this.state = STATE.COMPLETED;
	}
}
