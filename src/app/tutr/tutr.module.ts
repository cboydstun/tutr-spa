import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
	LoginService,
	CognitoService,
	ChangePasswordService,
	UserProfileService,
	S3Service,
	AwsCredentialsService,
} from './services';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [],
	providers: [
		LoginService,
		CognitoService,
		ChangePasswordService,
		UserProfileService,
		S3Service,
		AwsCredentialsService,
	]
})
export class TutrModule { }
