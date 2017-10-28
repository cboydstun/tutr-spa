import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentSpaceRoutingModule } from './student-space-routing.module';
import { DashboardComponent } from './components';

@NgModule({
	imports: [
		CommonModule,
		StudentSpaceRoutingModule
	],
	declarations: [DashboardComponent]
})
export class StudentSpaceModule { }
