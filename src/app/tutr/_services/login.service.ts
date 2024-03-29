import * as AWS from "aws-sdk/global";
import * as STS from "aws-sdk/clients/sts";

import { ReplaySubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { 
	AuthenticationDetails,  
	CognitoUser 
} from "amazon-cognito-identity-js";

import { CognitoService } from './cognito.service';
import { AwsCredentialsService } from './aws-credentials.service';

import { environment } from "../../../environments/environment";

@Injectable()
export class LoginService {
	public static NEW_PASSWORD_REQUIRED: string = 'NEW_PASSWORD_REQUIRED';
	public static USER_NOT_FOUND: string = 'UserNotFoundException';

	private isAuthenticatedSubject = new ReplaySubject<boolean>(1);

	public isAuthenticated = this.isAuthenticatedSubject.asObservable();

	constructor(private cognitoService: CognitoService,
				private awsCredentialsService: AwsCredentialsService) {}

	public getAuthentionStatus(): Promise<boolean> {
		return new Promise((resolve, reject) => {
			let cognitoUser = this.cognitoService.getCurrentUser();

			if (cognitoUser != null) {
				cognitoUser.getSession((err, session) => {
					if (err) {
						console.log("UserLoginService: Couldn't get the session: " + err, err.stack);
						resolve(false);
					}
					else {
						this.awsCredentialsService.init(session.getIdToken().getJwtToken()).then(() => {
							resolve(session.isValid());
						});
					}
				});
			} else {
				resolve(false);
			}
		}).then((status: boolean) => {
			this.isAuthenticatedSubject.next(status);
			return status;
		}, (err) => {
			this.isAuthenticatedSubject.next(false);
			return false;
		});
	}

	public logout() {
		const user = this.cognitoService.getCurrentUser();
		user && user.signOut();
		this.isAuthenticatedSubject.next(false);
	}

	public authenticate(username: string, password: string): Promise<any> {
		const authenticationData = {
			Username: username,
			Password: password,
		};

		const authenticationDetails = new AuthenticationDetails(authenticationData);

		const userData = {
			Username: username,
			Pool: this.cognitoService.getUserPool()
		};

		let cognitoUser = new CognitoUser(userData);

		return new Promise((resolve, reject) => {
			cognitoUser.authenticateUser(authenticationDetails, {
				newPasswordRequired: (userAttributes, requiredAttributes) => {
					reject(LoginService.NEW_PASSWORD_REQUIRED);
				},
				onSuccess: (result) => {
					const creds = this.cognitoService.buildCognitoCreds(result.getIdToken().getJwtToken());

					AWS.config.credentials = creds;

					// So, when CognitoIdentity authenticates a user, it doesn't actually hand us the IdentityID,
					// used by many of our other handlers. This is handled by some sly underhanded calls to AWS Cognito
					// API's by the SDK itself, automatically when the first AWS SDK request is made that requires our
					// security credentials. The identity is then injected directly into the credentials object.
					// If the first SDK call we make wants to use our IdentityID, we have a
					// chicken and egg problem on our hands. We resolve this problem by "priming" the AWS SDK by calling a
					// very innocuous API call that forces this behavior.
					const clientParams: any = {};
					if (environment.sts_endpoint) {
						clientParams.endpoint = environment.sts_endpoint;
					}

					const sts = new STS(clientParams);

					sts.getCallerIdentity((err, data) => {
						creds.get(err => {
							err ? reject(err) : resolve(result)
						});
					});

				},
				onFailure: (err) => {
					reject(err.code);
				},
			});
		}).then((x: any) => {
			this.isAuthenticatedSubject.next(true);
			return x;
		}, x => {
			this.isAuthenticatedSubject.next(false);
			throw x;
		});
	}
}
