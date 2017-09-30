import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import {
	LoginService,
	CognitoService,
	ChangePasswordService,
	UserProfileService,
	S3Service,
	AwsCredentialsService,
	CategoryService,
	CourseService,
	TutrInterceptor
} from './services';

import {
	PreloadCategoriesResolve,
	CategoryCoursesResolve,
	CategoryResolve,
	CourseResolve
} from './resolvers';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
	],
	exports: [
		HttpClientModule
	],
	declarations: [],
	providers: [
		LoginService,
		CognitoService,
		ChangePasswordService,
		UserProfileService,
		S3Service,
		AwsCredentialsService,
		CategoryService,
		PreloadCategoriesResolve,
		CategoryCoursesResolve,
		CourseService,
		CategoryResolve,
		CourseResolve,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TutrInterceptor,
			multi: true,
		}
	]
})
export class TutrModule { }
