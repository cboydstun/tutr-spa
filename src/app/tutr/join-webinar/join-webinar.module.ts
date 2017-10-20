import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { UikitModule } from '../../uikit/uikit.module';

import { JoinWebinarRoutingModule } from './join-webinar-routing.module';

import { 
	WebinarRoomComponent, 
	WebinarRoomControlsComponent 
} from './components';

import { CursorAtRestDirective } from './directives';
import { 
	WebrtcSignalingService,
	UserMediaService,
	PeerConnectionService,
	ParticipantFlowService,
	InstructorFlowService
} from './services';

@NgModule({
	imports: [
		CommonModule,
		JoinWebinarRoutingModule,
		UikitModule,
		TranslateModule
	],
	providers: [
		WebrtcSignalingService,
		UserMediaService,
		PeerConnectionService,
		ParticipantFlowService,
		InstructorFlowService
	],
	declarations: [
		WebinarRoomComponent, 
		CursorAtRestDirective, 
		WebinarRoomControlsComponent
	]
})
export class JoinWebinarModule { }
