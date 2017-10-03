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
	CourseLandingPageComponent
} from './components';
import { WebinarManagementComponent } from './webinar-management/webinar-management.component';

@NgModule({
	imports: [
		CommonModule,
		InstructorRoutingModule,
		UikitModule
	],
	declarations: [DashboardComponent, DashboardCoursesComponent, DashboardWebinarsComponent, CourseManagementComponent, CourseGoalsComponent, CourseLandingPageComponent, WebinarManagementComponent]
})
export class InstructorModule { }
