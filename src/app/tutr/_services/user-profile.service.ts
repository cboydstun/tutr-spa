import 'rxjs/add/operator/toPromise';

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

	constructor(private httpClient: HttpClient) { }

	public getProfile(): Promise<any> {
		return this.httpClient.get('/DescribeUserProfile').toPromise();
	}

	public getPublicProfile(id: string): Promise<any> {
		const params = new HttpParams().set('id', id);
		return this.httpClient.get('/DescribePublicUserProfile', {params}).toPromise();
	}

	public updateProfile(profile: {given_name:string, family_name:string, headline:string, bio:string}): Promise<any> {
		return this.httpClient.post('/SaveUserProfile', profile).toPromise();	
	}

}
