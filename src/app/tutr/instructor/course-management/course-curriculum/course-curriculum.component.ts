import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-course-curriculum',
	templateUrl: './course-curriculum.component.html',
	styleUrls: ['./course-curriculum.component.css']
})
export class CourseCurriculumComponent implements OnInit {
	public curriculums: any[] = [{
		title: 'Lesson',
		type: 'lesson'
	}, {
		title: 'Quiz',
		type: 'quiz'
	}];

	constructor() { }

	ngOnInit() {
	}

	public addEmptyCurriculumLesson() {
		this.curriculums.push({
			title: 'Lesson',
			type: 'lesson'
		});
	}

	public addEmptyCurriculumQuiz() {
		this.curriculums.push({
			title: 'Quiz',
			type: 'quiz'
		});
	}

}
