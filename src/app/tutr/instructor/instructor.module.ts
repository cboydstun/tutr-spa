import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
	CreateWebinarComponent
} from './components';

@NgModule({
	imports: [
		CommonModule,
		InstructorRoutingModule,
		UikitModule,
		FormsModule, 
		ReactiveFormsModule 
	],
	declarations: [DashboardComponent, DashboardCoursesComponent, DashboardWebinarsComponent, CourseManagementComponent, CourseGoalsComponent, CourseLandingPageComponent, WebinarManagementComponent, WebinarBasicsComponent, CreateCourseComponent, WorkingTitleFormComponent, CreateWebinarComponent]
})
export class InstructorModule { }
