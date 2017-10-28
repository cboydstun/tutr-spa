import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { S3Service } from '../../services';

@Component({
	selector: 'tutr-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	public profile: any;

	public attachments: {url: string, name: string}[] = [];

	constructor(private activatedRoute: ActivatedRoute,
				private s3Service: S3Service) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.profile = data.profile;
		});

		this.s3Service.listProfileAttachments(this.profile.id)
			.then((attachments: {url: string, name: string}[]) => this.attachments = attachments);
	}

}
