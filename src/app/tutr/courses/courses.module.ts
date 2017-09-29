import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './components';

@NgModule({
	imports: [
		CommonModule,
		CoursesRoutingModule
	],
	declarations: [CoursesComponent]
})
export class CoursesModule { }
