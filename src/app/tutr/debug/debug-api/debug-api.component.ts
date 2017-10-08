import { Component, OnInit } from '@angular/core';

import { 
	AwsCredentialsService, 
	CognitoService, 
	UserProfileService
} from './../../services';

@Component({
	selector: 'tutr-debug-api',
	templateUrl: './debug-api.component.html',
	styleUrls: ['./debug-api.component.css']
})
export class DebugApiComponent implements OnInit {
	public accessKeyId: string;
	public secretAccessKey: string;

	public profile: any;

	public createCourseTitle: string = 'My Brand New Course';

	constructor(private cognitoService: CognitoService,
				private awsCredentialsService: AwsCredentialsService,
				private userProfileService: UserProfileService) { }

	ngOnInit() {
		this.cognitoService.getIdToken().then((token) => {
			return this.awsCredentialsService.init(token).then((credentials: any) => {
				this.accessKeyId = credentials.accessKeyId;
				this.secretAccessKey = credentials.secretAccessKey;
			});
		});

		this.userProfileService.getProfile().then(profile => this.profile = profile);
	}

	onSubmit() {
	}

}
