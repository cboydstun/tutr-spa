import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Webinar } from '../../../models';
import { WebinarService } from '../../../services';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
	selector: 'tutr-create-webinar',
	templateUrl: './create-webinar.component.html',
	styleUrls: ['./create-webinar.component.css']
})
export class CreateWebinarComponent implements OnInit {
	public isLoading: boolean = false;

	constructor(private webinarService: WebinarService,
				private router: Router,
				private toastr: ToastsManager) { }

	ngOnInit() {
	}

	onSubmit(title: string) {
		this.isLoading = true;

		this.webinarService.create(title)
			.then((webinar: Webinar) => {
				this.toastr.success('Webinar created');
				this.toastr.info('Redirecting you to edit page');
				this.router.navigate(['/instructor', 'webinar', webinar.id])
			})
	}
}
