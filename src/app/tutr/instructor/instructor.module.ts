import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorRoutingModule } from './instructor-routing.module';
import { 
	DashboardComponent,
	DashboardCoursesComponent,
	DashboardWebinarsComponent
} from './components';

@NgModule({
	imports: [
		CommonModule,
		InstructorRoutingModule
	],
	declarations: [DashboardComponent, DashboardCoursesComponent, DashboardWebinarsComponent]
})
export class InstructorModule { }
