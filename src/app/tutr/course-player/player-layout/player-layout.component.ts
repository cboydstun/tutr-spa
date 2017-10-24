import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Course } from '../../models';

@Component({
    selector: 'tutr-player-layout',
    templateUrl: './player-layout.component.html',
    styleUrls: ['./player-layout.component.css']
})
export class PlayerLayoutComponent implements OnInit {
	public isSidebarOpen: boolean = true;
	public course: Course;

	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.course = data.course;
		});
	}

}
