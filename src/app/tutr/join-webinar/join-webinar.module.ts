import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UikitModule } from '../../uikit/uikit.module';

import { JoinWebinarRoutingModule } from './join-webinar-routing.module';
import { WebinarRoomComponent } from './components';

@NgModule({
	imports: [
		CommonModule,
		JoinWebinarRoutingModule,
		UikitModule
	],
	declarations: [WebinarRoomComponent]
})
export class JoinWebinarModule { }
