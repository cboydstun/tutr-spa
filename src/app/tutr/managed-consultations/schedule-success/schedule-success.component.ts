import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'tutr-schedule-success',
	templateUrl: './schedule-success.component.html',
	styleUrls: ['./schedule-success.component.css']
})
export class ScheduleSuccessComponent implements OnInit {

	constructor(private activatedRoute: ActivatedRoute,
				private router: Router) { }

	ngOnInit() {
	}

}
