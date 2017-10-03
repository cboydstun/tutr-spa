import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Course, Category } from '../../models';

@Component({
	selector: 'tutr-courses-category',
	templateUrl: './courses-category.component.html',
	styleUrls: ['./courses-category.component.css']
})
export class CoursesCategoryComponent implements OnInit {
	public courses: Course[] = [];
	public category: Category;

	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.courses = data.courses;
			this.category = data.category;
		});
	}

}
