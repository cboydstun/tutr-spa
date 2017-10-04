import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
	WebinarBasicsComponent
} from './components';

@NgModule({
	imports: [
		CommonModule,
		InstructorRoutingModule,
		UikitModule
	],
	declarations: [DashboardComponent, DashboardCoursesComponent, DashboardWebinarsComponent, CourseManagementComponent, CourseGoalsComponent, CourseLandingPageComponent, WebinarManagementComponent, WebinarBasicsComponent]
})
export class InstructorModule { }
