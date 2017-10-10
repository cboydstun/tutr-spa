import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursePlayerRoutingModule } from './course-player-routing.module';
import { PlayerComponent } from './components';

import { UikitModule } from '../../uikit/uikit.module';

@NgModule({
	imports: [
		CommonModule,
		CoursePlayerRoutingModule,
		UikitModule
	],
	declarations: [PlayerComponent]
})
export class CoursePlayerModule { }
