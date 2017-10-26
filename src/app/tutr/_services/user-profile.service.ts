import 'rxjs/add/operator/toPromise';

import { Profile } from '../models';

import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import {
	AuthenticationDetails,
	CognitoUserAttribute,
	CognitoUser
} from "amazon-cognito-identity-js";

import { CognitoService } from './cognito.service';

import { environment } from "../../../environments/environment";

@Injectable()
export class UserProfileService {

	constructor(private httpClient: HttpClient,
		private cognitoService: CognitoService) { }

	listInstructors(): Promise<any> {
		return this.httpClient.get('/ListPublicUserProfiles').toPromise().then((items: any) => items.map(item => new Profile(item)));
	}

	public getProfile(): Promise<any> {
		return this.httpClient.get('/DescribeUserProfile').toPromise().then(item => new Profile(item));
	}

	public getPublicProfile(id: string): Promise<any> {
		const params = new HttpParams().set('id', id);
		return this.httpClient.get('/DescribePublicUserProfile', { params }).toPromise().then(item => new Profile(item));
	}

	public updateProfile(profile: { given_name: string, family_name: string, headline: string, bio: string }): Promise<any> {
		return this.httpClient.post('/SaveUserProfile', profile).toPromise().then(() => this.updateAttributes({
			given_name: profile.given_name,
			family_name: profile.family_name
		}));
	}

	protected updateAttributes(attributes: { [s: string]: string }): Promise<any> {
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

}
