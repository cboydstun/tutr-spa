import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { 
	StudentDashboard, 
	Course, 
	Webinar, 
	ConsultationBooking 
} from '../../models';

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

			const _map = (item) => {
				const [type, instructor_id, id] = item.object_id.split(':');
				const object = item.object;

				return {
					...object,
					instructor_id,
					id
				};
			};

			this.studentDashboard.courses = this.studentDashboard.courses.map(item => new Course(_map(item)));
			this.studentDashboard.webinars = this.studentDashboard.webinars.map(item => new Webinar(_map(item)));
			//this.studentDashboard.consultations = this.studentDashboard.consultations.map(item => new ConsultationBooking(item));
		});
	}

}
