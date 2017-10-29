import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StudentDashboard } from '../../models';

@Component({
	selector: 'tutr-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	public studentDashboard: StudentDashboard;

	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.studentDashboard = data.dashboard;
		});
	}

}
