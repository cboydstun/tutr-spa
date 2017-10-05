import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

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
		CoursesRoutingModule,
		TranslateModule
	],
	declarations: [
		CoursesCategoryComponent, 
		CoursesSearchComponent, 
		CourseDetailsComponent, 
		CourseLearnComponent
	]
})
export class CoursesModule { }
