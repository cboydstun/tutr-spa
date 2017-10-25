import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Webinar } from '../../models';
import { EnrollmentService, LoginService } from '../../services';

@Component({
	selector: 'app-webinar-details',
	templateUrl: './webinar-details.component.html',
	styleUrls: ['./webinar-details.component.css']
})
export class WebinarDetailsComponent implements OnInit, OnDestroy {
	public webinar: Webinar;
	public enrollmentStatus: boolean = false;
	public gettingEnrollmentStatus: boolean = true;
	public isAuthenticated: boolean = false;

	private isAuthenticatedSubscription: any;

	constructor(private activatedRoute: ActivatedRoute,
				private router: Router,
				private enrollmentService: EnrollmentService,
				private loginService: LoginService) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.webinar = data.webinar;
		});

		this.isAuthenticatedSubscription = this.loginService.isAuthenticated.subscribe((status: boolean) => {
			this.isAuthenticated = status;
		});

		this.enrollmentService.enrollmentStatus(this.webinar).then((status: boolean) => {
			this.enrollmentStatus = status;
			this.gettingEnrollmentStatus = false;
		}).catch(() => {
			this.enrollmentStatus = false;
			this.gettingEnrollmentStatus = false;
		});
	}

	ngOnDestroy() {
		this.isAuthenticatedSubscription.unsubscribe();
	}

	public enroll() {
		if (!this.isAuthenticated) {
			this.router.navigate(['/auth', 'login']);
		} else {
			this.enrollmentService.enroll(this.webinar).then(() => {
				this.enrollmentStatus = true;
			});
		}
	}

}
