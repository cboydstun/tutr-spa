import * as AWS from "aws-sdk/global";
import * as S3 from "aws-sdk/clients/s3";

import { Injectable } from '@angular/core';

import { CognitoService } from './cognito.service';
import { AwsCredentialsService } from './aws-credentials.service';

import { Course } from '../models';

import  { SubmitCourseService } from './submit-course.service';

import { environment } from "../../../environments/environment";

@Injectable()
export class SubmitRightAwayCourseService extends SubmitCourseService {
	constructor(private cognitoService: CognitoService) {
		super();
	}

	public submit(course: Course): Promise<any> {
		debugger
		return Promise.resolve('asdf');
	}
}