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
export class RegisterService {
	public static USERNAME_EXISTS: string = 'UsernameExistsException';

	constructor(private cognitoService: CognitoService) { }

	public register(data: {username: string, email: string, password: string}): Promise<any> {
		const pool = this.cognitoService.getUserPool();

		return new Promise((resolve, reject) => {
			const attributeList = [
				new CognitoUserAttribute({
					Name: 'email',
					Value: data.email
				}),
				new CognitoUserAttribute({
					Name: 'given_name',
					Value: ''
				}),
				new CognitoUserAttribute({
					Name: 'family_name',
					Value: ''
				})
			];

			pool.signUp(data.username, data.password, attributeList, null, function(err, result){
				if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			});
		});
	}
}
