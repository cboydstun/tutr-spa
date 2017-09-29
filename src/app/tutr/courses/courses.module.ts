import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UikitModule } from '../../uikit/uikit.module';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './components';

@NgModule({
	imports: [
		CommonModule,
		UikitModule,
		CoursesRoutingModule
	],
	declarations: [CoursesComponent]
})
export class CoursesModule { }
