import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursePlayerRoutingModule } from './course-player-routing.module';
import { PlayerComponent } from './components';

@NgModule({
	imports: [
		CommonModule,
		CoursePlayerRoutingModule
	],
	declarations: [PlayerComponent]
})
export class CoursePlayerModule { }
