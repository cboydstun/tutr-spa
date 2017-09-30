import { Component, OnInit } from '@angular/core';

import { Course } from '../../models';

@Component({
	selector: 'app-courses-search',
	templateUrl: './courses-search.component.html',
	styleUrls: ['./courses-search.component.css']
})
export class CoursesSearchComponent implements OnInit {
	public courses: Course[] = [];

	constructor() { }

	ngOnInit() {
	}

}
