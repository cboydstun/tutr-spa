import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { UikitModule } from '../../uikit/uikit.module';

import { StudentSpaceRoutingModule } from './student-space-routing.module';
import { DashboardComponent } from './components';

@NgModule({
	imports: [
		CommonModule,
		StudentSpaceRoutingModule,
		TranslateModule,
		UikitModule
	],
	declarations: [DashboardComponent]
})
export class StudentSpaceModule { }
