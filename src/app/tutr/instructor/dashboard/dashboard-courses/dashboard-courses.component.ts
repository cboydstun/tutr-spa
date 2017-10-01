import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Course } from '../../../models';

@Component({
	selector: 'app-dashboard-courses',
	templateUrl: './dashboard-courses.component.html',
	styleUrls: ['./dashboard-courses.component.css']
})
export class DashboardCoursesComponent implements OnInit {
	public courses: Course[];

	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.courses = data.courses;
		});
	}

}
