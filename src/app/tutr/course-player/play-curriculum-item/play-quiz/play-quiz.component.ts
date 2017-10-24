import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

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
	private formCache;
	private answers;
	private questionMap;

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

	public get currForm(): FormGroup {
		return this.formCache[this.currQuestion.id];
	}

	constructor() { }

	ngOnInit() {
		this.questionMap = this.lesson.questions.reduce((map, q) => {
			map[q.id] = q;
			return map;
		}, {});
	}

	public startQuiz() {
		this.buildFormCache();

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
		return this.currForm.valid;
	}

	public completeQuiz() {
		this.state = STATE.COMPLETED;

		this.answers = {};

		this.lesson.questions.forEach(q => {
			const { answers } = this.formCache[q.id].value;
			this.answers[q.id] = answers;
		});
	}

	public isCorrectAnswer(question, answerIndex) {
		return this.answers[question.id][answerIndex] && this.questionMap[question.id].answers[answerIndex].correct;
	}

	public isWrongAnswer(question, answerIndex) {
		return this.answers[question.id][answerIndex] && !this.questionMap[question.id].answers[answerIndex].correct;
	}

	private buildFormCache() {
		this.formCache = {};

		this.lesson.questions.forEach(q => {
			this.formCache[q.id] = new FormGroup({
				answers: new FormArray(
					q.answers.map(a => new FormControl(null)),
					PlayQuizComponent.multipleCheckboxRequireAtLeastOne
				)
			});
		});
	}

	static multipleCheckboxRequireAtLeastOne(fa: FormArray): any {
		let valid = false;

		for (let x = 0; x < fa.length; ++x) {
			if (fa.at(x).value) {
				valid = true;
				break;
			}
		}

		return valid ? null : {
			multipleCheckboxRequireOne: true
		};
	}
}
