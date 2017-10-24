import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Course } from '../../models';

@Component({
	selector: 'tutr-play-curriculum-item',
	templateUrl: './play-curriculum-item.component.html',
	styleUrls: ['./play-curriculum-item.component.css']
})
export class PlayCurriculumItemComponent implements OnInit {
	public course: Course;
	public lesson: any;

	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.parent.data.subscribe(data => {
			this.course = data.course;
		});

		this.activatedRoute.params.subscribe(data => {
			const curriculum_id = data.lecture;
			this.lesson = this.course.curriculum.find(c => c.id === curriculum_id);
		});
	}
}
