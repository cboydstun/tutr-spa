import 'rxjs/add/operator/toPromise';

import * as AWS from "aws-sdk/global";
import * as S3 from "aws-sdk/clients/s3";

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CognitoService } from './cognito.service';
import { AwsCredentialsService } from './aws-credentials.service';

import { Webinar } from '../models';

import  { SubmitWebinarService } from './submit-webinar.service';

import { environment } from "../../../environments/environment";

@Injectable()
export class SubmitRightAwayWebinarService extends SubmitWebinarService {
	constructor(private cognitoService: CognitoService,
				private httpClient: HttpClient) {
		super();
	}

	public submit(webinar: Webinar): Promise<any> {
		return this.httpClient.post('/SubmitWebinar', webinar).toPromise();
	}
}