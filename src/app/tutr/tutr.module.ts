import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import {
	LoginService,
	RegisterService,
	CognitoService,
	ChangePasswordService,
	UserProfileService,
	S3Service,
	AwsCredentialsService,
	CategoryService,
	CourseService,
	TutrInterceptor,
	InstructorCourseService,
	CategoryCourseService,
	SubmitCourseService,
	SubmitRightAwayCourseService
} from './services';

import {
	PreloadCategoriesResolve,
	CategoryCoursesResolve,
	CategoryResolve,
	CourseResolve,
	InstructorCoursesResolve,
	InstructorCourseResolve,
	UserProfileResolve
} from './resolvers';

import {
	OnlyInstructorsGuard,
	OnlyLoggedInUsersGuard
} from './guards';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule
	],
	exports: [
		HttpClientModule
	],
	declarations: [],
	providers: [
		LoginService,
		RegisterService,
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
		InstructorCourseService,
		InstructorCoursesResolve,
		CategoryCourseService,
		InstructorCourseResolve,
		UserProfileResolve,
		OnlyInstructorsGuard,
		OnlyLoggedInUsersGuard,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TutrInterceptor,
			multi: true,
		},
		SubmitRightAwayCourseService,
		[SubmitCourseService, { provide: SubmitCourseService, useExisting: SubmitRightAwayCourseService }]
	]
})
export class TutrModule { }
