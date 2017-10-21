import * as AWS from "aws-sdk/global";
import * as STS from "aws-sdk/clients/sts";

import { Injectable } from '@angular/core';

import { 
	AuthenticationDetails, 
	CognitoUserAttribute, 
	CognitoUser 
} from "amazon-cognito-identity-js";

import { CognitoService } from './cognito.service';

import { environment } from "../../../environments/environment";

@Injectable()
export class RegisterWidthEmailService {
	public static USERNAME_EXISTS: string = 'UsernameExistsException';

	constructor(private cognitoService: CognitoService) { }

	public register(data: {email: string, password: string}): Promise<any> {
		const pool = this.cognitoService.getUserPool();

		return new Promise((resolve, reject) => {
			const attributeList = [
				new CognitoUserAttribute({
					Name: 'given_name',
					Value: ''
				}),
				new CognitoUserAttribute({
					Name: 'family_name',
					Value: ''
				})
			];

			pool.signUp(data.email, data.password, attributeList, null, function(err, result){
				if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			});
		});
	}
}
