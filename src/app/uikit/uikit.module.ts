import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { 
	CourseCardComponent, 
	CourseCardGridComponent,
	InstructorCourseItemComponent,
	InstructorCourseGroupComponent,
	InstructorWebinarItemComponent,
	InstructorWebinarGroupComponent,
	WebinarCardComponent,
	WebinarCardGridComponent
} from './components';

@NgModule({
	imports: [
		CommonModule,
		NgbModule.forRoot(),
		RouterModule
	],
	declarations: [
		CourseCardComponent, 
		CourseCardGridComponent, 
		InstructorCourseItemComponent,
		InstructorCourseGroupComponent,
		InstructorWebinarItemComponent,
		InstructorWebinarGroupComponent,
		WebinarCardComponent,
		WebinarCardGridComponent
		],
	exports: [
		CourseCardComponent,
		CourseCardGridComponent,
		InstructorCourseItemComponent,
		InstructorCourseGroupComponent,
		InstructorWebinarItemComponent,
		InstructorWebinarGroupComponent,
		WebinarCardComponent,
		WebinarCardGridComponent,
		NgbModule
	]
})
export class UikitModule { }
