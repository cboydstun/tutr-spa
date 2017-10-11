import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { 
	FormsModule, 
	ReactiveFormsModule 
} from '@angular/forms';

import { UikitModule } from '../../uikit/uikit.module';

import { InstructorRoutingModule } from './instructor-routing.module';
import { 
	DashboardComponent,
	DashboardCoursesComponent,
	DashboardWebinarsComponent,
	CourseManagementComponent,
	CourseGoalsComponent,
	CourseLandingPageComponent,
	WebinarManagementComponent,
	WebinarBasicsComponent,
	CreateCourseComponent,
	WorkingTitleFormComponent,
	CreateWebinarComponent,
	CourseCurriculumComponent,
	CoursePictureComponent
} from './components';

@NgModule({
	imports: [
		CommonModule,
		InstructorRoutingModule,
		UikitModule,
		FormsModule, 
		ReactiveFormsModule,
		TranslateModule
	],
	declarations: [DashboardComponent, DashboardCoursesComponent, DashboardWebinarsComponent, CourseManagementComponent, CourseGoalsComponent, CourseLandingPageComponent, WebinarManagementComponent, WebinarBasicsComponent, CreateCourseComponent, WorkingTitleFormComponent, CreateWebinarComponent, CourseCurriculumComponent, CoursePictureComponent]
})
export class InstructorModule { }
