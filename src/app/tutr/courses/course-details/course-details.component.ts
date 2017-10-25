import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Course } from '../../models';
import { EnrollmentService, LoginService } from '../../services';

@Component({
	selector: 'tutr-course-details',
	templateUrl: './course-details.component.html',
	styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit, OnDestroy {
	public course: Course;
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
			this.course = data.course;
		});

		this.isAuthenticatedSubscription = this.loginService.isAuthenticated.subscribe((status: boolean) => {
			this.isAuthenticated = status;
		});

		this.enrollmentService.enrollmentStatus(this.course).then((status: boolean) => {
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
			this.enrollmentService.enroll(this.course).then(() => {
				this.enrollmentStatus = true;
			});
		}
	}

}
