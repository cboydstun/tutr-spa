import { LoginService } from './_services/login.service';
import { CognitoService } from './_services/cognito.service';
import { ChangePasswordService } from './_services/change-password.service';
import { UserProfileService } from './_services/user-profile.service';
import { S3Service } from './_services/s3.service';
import { AwsCredentialsService } from './_services/aws-credentials.service';
import { CategoryService } from './_services/category.service';
import { TutrInterceptor } from './_services/tutr-intercept';
import { CourseService } from './_services/course.service';
import { InstructorCourseService } from './_services/instructor-course.service';
import { CategoryCourseService } from './_services/category-course.service';

export {
	LoginService,
	CognitoService,
	ChangePasswordService,
	UserProfileService,
	S3Service,
	AwsCredentialsService,
	CategoryService,
	TutrInterceptor,
	CourseService,
	InstructorCourseService,
	CategoryCourseService
}