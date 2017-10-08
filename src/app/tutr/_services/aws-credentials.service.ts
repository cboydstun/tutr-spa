import * as AWS from "aws-sdk/global";

import { Injectable } from '@angular/core';

import { CognitoService } from './cognito.service';

import { environment } from "../../../environments/environment";

@Injectable()
export class AwsCredentialsService {

	constructor(private cognitoService: CognitoService) { 
		AWS.config.update({
			region: environment.region
		});
	}

	public init(idTokenJwt: string) {
		const creds = this.cognitoService.buildCognitoCreds(idTokenJwt);

		AWS.config.credentials = creds;

		return new Promise((resolve, reject) => {
			creds.get(err => {
				err ? reject(err) : resolve();
			});
		});
	}

}
