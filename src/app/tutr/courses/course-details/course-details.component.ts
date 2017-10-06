import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Course } from '../../models';

@Component({
	selector: 'tutr-course-details',
	templateUrl: './course-details.component.html',
	styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
	public course: Course;
	public pageId: string;

	constructor(private activatedRoute: ActivatedRoute,
				private router: Router) { 
		this.pageId = router.url;
	}

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.course = data.course;
		});
	}

}
