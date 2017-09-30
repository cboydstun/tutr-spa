import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { 
	CourseCardComponent, 
	CourseCardGridComponent 
} from './components';

@NgModule({
	imports: [
		CommonModule,
		NgbModule.forRoot(),
		RouterModule
	],
	declarations: [CourseCardComponent, CourseCardGridComponent],
	exports: [
		CourseCardComponent,
		CourseCardGridComponent,
		NgbModule
	]
})
export class UikitModule { }
