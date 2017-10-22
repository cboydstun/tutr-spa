import * as AWS from "aws-sdk/global";
import * as STS from "aws-sdk/clients/sts";

import { Injectable } from '@angular/core';

import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";

import { CognitoService } from './cognito.service';

import { environment } from "../../../environments/environment";

@Injectable()
export class ChangePasswordService {
	public static CODE_MISMATCH: string = 'CodeMismatchException';
	public static USER_NOT_FOUND: string = 'UserNotFoundException';
	public static EXPIRED_CODE_EXCEPTION: string = 'ExpiredCodeException';

	constructor(private cognitoService: CognitoService) { }

	confirmCode(username: string, code: string): Promise<any> {
		let userData = {
			Username: username,
			Pool: this.cognitoService.getUserPool()
		};

		let cognitoUser = new CognitoUser(userData);

		return new Promise((resolve, reject) => {
			cognitoUser.confirmRegistration(code, true, function(err, result) {
				err ? reject(err) : resolve(result);
			});
		});
	}

	confirmPassword(username: string, code: string, password: string): Promise<any> {
		let userData = {
			Username: username,
			Pool: this.cognitoService.getUserPool()
		};

		let cognitoUser = new CognitoUser(userData);

		return new Promise((resolve, reject) => {
			cognitoUser.confirmPassword(code, password ,{
				onSuccess: resolve,
				onFailure: reject
			});
		});
	}

	forgottenPassword(username: string): Promise<any> {
		let userData = {
			Username: username,
			Pool: this.cognitoService.getUserPool()
		};

		let cognitoUser = new CognitoUser(userData);

		return new Promise((resolve, reject) => {
			cognitoUser.forgotPassword({
				onSuccess: resolve,
				onFailure: reject
			});
		});
	}

	changeTempPassword(username: string, existingPassword: string, newPassword: string): Promise<any> {
		let authenticationData = {
			Username: username,
			Password: existingPassword,
		};

		let authenticationDetails = new AuthenticationDetails(authenticationData);

		let userData = {
			Username: username,
			Pool: this.cognitoService.getUserPool()
		};

		let cognitoUser = new CognitoUser(userData);

		return new Promise((resolve, reject) => {
			cognitoUser.authenticateUser(authenticationDetails, {
				newPasswordRequired: function(userAttributes, requiredAttributes) {
					// User was signed up by an admin and must provide new
					// password and required attributes, if any, to complete
					// authentication.

					// the api doesn't accept this field back
					delete userAttributes.email_verified;
					cognitoUser.completeNewPasswordChallenge(newPassword, requiredAttributes, {
						onSuccess: function(result) {
							resolve(userAttributes);
						},
						onFailure: function(err) {
							reject(err);
						}
					});
				},
				onSuccess: function(result) {
					resolve(result);
				},
				onFailure: function(err) {
					reject(err);
				}
			});
		}).then(x => {
			return x;
		}, x => {
			throw x;
		});
	}

}
