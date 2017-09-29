import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
	CourseCardComponent, 
	CourseCardGridComponent 
} from './components';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [CourseCardComponent, CourseCardGridComponent],
	exports: [
		CourseCardComponent,
		CourseCardGridComponent
	]
})
export class UikitModule { }
