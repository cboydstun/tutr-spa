import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Webinar } from '../../../models';
import { WebinarService } from '../../../services';

@Component({
	selector: 'tutr-create-webinar',
	templateUrl: './create-webinar.component.html',
	styleUrls: ['./create-webinar.component.css']
})
export class CreateWebinarComponent implements OnInit {

	constructor(private webinarService: WebinarService,
				private router: Router) { }

	ngOnInit() {
	}

	onSubmit(title: string) {
		this.webinarService.create(title)
			.then((webinar: Webinar) => this.router.navigate(['/instructor', 'webinar', webinar.slug]))
	}
}
