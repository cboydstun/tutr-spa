import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Course } from '../../../models';
import { InstructorCourseService } from '../../../services';

@Component({
	selector: 'app-course-curriculum',
	templateUrl: './course-curriculum.component.html',
	styleUrls: ['./course-curriculum.component.css']
})
export class CourseCurriculumComponent implements OnInit {
	public course: Course;

	public curriculums: any[] = [];

	public isAddingLesson: boolean = false;
	public isAddingQuiz: boolean = false;

	constructor(private instructorCourseService: InstructorCourseService,
				private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.parent.data.subscribe(data => {
			this.course = data.course;
		});

		this.activatedRoute.data.subscribe(data => {
			this.curriculums = data.curriculums;
		});
	}

	public addEmptyCurriculumLesson() {
		this.isAddingLesson = true;

		this.instructorCourseService.addCurriculumItem({
			title: 'Lesson',
			type: 'lesson',
			course_id: this.course.id
		})
		.then(curriculum => this.curriculums.push(curriculum))
		.then(() => this.isAddingLesson = false)
		.catch(() => this.isAddingLesson = false);
	}

	public addEmptyCurriculumQuiz() {
		this.isAddingQuiz = true;

		this.instructorCourseService.addCurriculumItem({
			title: 'Lesson',
			type: 'quiz',
			course_id: this.course.id
		})
		.then(curriculum => this.curriculums.push(curriculum))
		.then(() => this.isAddingQuiz = false)
		.catch(() => this.isAddingQuiz = false);
	}

}
