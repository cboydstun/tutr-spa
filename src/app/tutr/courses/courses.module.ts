import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UikitModule } from '../../uikit/uikit.module';

import { CoursesRoutingModule } from './courses-routing.module';
import {
	CoursesCategoryComponent,
	CoursesSearchComponent,
	CourseDetailsComponent,
	CourseLearnComponent
} from './components';

@NgModule({
	imports: [
		CommonModule,
		UikitModule,
		CoursesRoutingModule
	],
	declarations: [
		CoursesCategoryComponent, 
		CoursesSearchComponent, 
		CourseDetailsComponent, 
		CourseLearnComponent
	]
})
export class CoursesModule { }
