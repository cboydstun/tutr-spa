import { Component, OnInit, Input } from '@angular/core';

const MODES = {
	NORMAL : 1,
	EDIT   : 2
};

@Component({
	selector: 'uikit-curriculum-quiz-item',
	templateUrl: './curriculum-quiz-item.component.html',
	styleUrls: ['./curriculum-quiz-item.component.css']
})
export class CurriculumQuizItemComponent implements OnInit {
	@Input() curriculum: any;

	public expanded: boolean = false;

	private mode: number = MODES.NORMAL;

	constructor() { }

	ngOnInit() {
		this.curriculum.questions = [];
	}

	public turnOnEditMode() {
		this.mode = MODES.EDIT;
	}

	public turnOnNormalMode() {
		this.mode = MODES.NORMAL;
	}

	public isNormalMode() : boolean {
		return this.mode == MODES.NORMAL;
	}

	public isEditMode() : boolean {
		return this.mode == MODES.EDIT;
	}

	public deleteQuiz() {

	}

}
