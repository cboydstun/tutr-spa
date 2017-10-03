import { Injectable } from '@angular/core';

import { 
	AuthenticationDetails, 
	CognitoUserAttribute, 
	CognitoUser 
} from "amazon-cognito-identity-js";

import { CognitoService } from './cognito.service';

import { environment } from "../../../environments/environment";

@Injectable()
export class UserProfileService {

	constructor(private cognitoService: CognitoService) { }

	public updateAttributes(attributes: {[s: string]: string}): Promise<any> {
		const cognitoUser = this.cognitoService.getCurrentUser();

		const attributeList = Object.keys(attributes).reduce((acc, attributeName) => {
			acc.push(new CognitoUserAttribute({
				Name: attributeName,
				Value: '' + attributes[attributeName]
			}));

			return acc;
		}, []);

		return new Promise((resolve, reject) => {
			cognitoUser.getSession((err, session) => {
				if (err) {
					reject(err);
				} else {
					cognitoUser.updateAttributes(attributeList, function(err, result) {
						err ? reject(err) : resolve(result);
					});
				}
			});
		});
	}

	public getProfile(): Promise<any> {
		let cognitoUser = this.cognitoService.getCurrentUser();

		if (cognitoUser == null) {
			return Promise.reject(new Error('Empty session'));
		} else {
			return new Promise((resolve, reject) => {
				cognitoUser.getSession((err, session) => {
					if (err) {
						reject(err);
					} else {
						cognitoUser.getUserAttributes((err, result) => {
							err ? reject(err) : resolve(result.reduce((acc, attr) => {
								acc[attr.getName()] = attr.getValue();
								return acc;
							}, {}));
						});
					}
				});
			});
		}
	}

}
