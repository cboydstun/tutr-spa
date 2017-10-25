import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Webinar } from '../../models';
import { EnrollmentService } from '../../services';

@Component({
	selector: 'app-webinar-details',
	templateUrl: './webinar-details.component.html',
	styleUrls: ['./webinar-details.component.css']
})
export class WebinarDetailsComponent implements OnInit {
	public webinar: Webinar;
	public enrollmentStatus: boolean = false;
	public gettingEnrollmentStatus: boolean = true;

	constructor(private activatedRoute: ActivatedRoute,
				private enrollmentService: EnrollmentService) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.webinar = data.webinar;
		});

		this.enrollmentService.enrollmentStatus(this.webinar).then((status: boolean) => {
			this.enrollmentStatus = status;
			this.gettingEnrollmentStatus = false;
		}).catch(() => {
			this.enrollmentStatus = false;
			this.gettingEnrollmentStatus = false;
		});
	}

	public enroll() {
		this.enrollmentService.enroll(this.webinar);
	}

}
