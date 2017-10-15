import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursePlayerRoutingModule } from './course-player-routing.module';
import { PlayerComponent, CoursePlayerComponent } from './components';

import { UikitModule } from '../../uikit/uikit.module';

@NgModule({
	imports: [
		CommonModule,
		CoursePlayerRoutingModule,
		UikitModule
	],
	declarations: [PlayerComponent, CoursePlayerComponent]
})
export class CoursePlayerModule { }
