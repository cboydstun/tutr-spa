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

import { TutrRoutingModule } from './tutr-routing.module';

@NgModule({
	imports: [
		CommonModule,
		TutrRoutingModule,
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
