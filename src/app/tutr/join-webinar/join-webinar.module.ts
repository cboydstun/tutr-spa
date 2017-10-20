import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { UikitModule } from '../../uikit/uikit.module';

import { JoinWebinarRoutingModule } from './join-webinar-routing.module';

import { 
	WebinarRoomComponent, 
	WebinarControlsComponent,
	AsParticipantComponent,
	AsInstructorComponent
} from './components';

import { CursorAtRestDirective } from './directives';
import { 
	WebrtcSignalingService,
	UserMediaService,
	PeerConnectionService,
	ParticipantCallService,
	InstructorCallService
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
		ParticipantCallService,
		InstructorCallService
	],
	declarations: [
		WebinarRoomComponent, 
		CursorAtRestDirective, 
		WebinarControlsComponent, AsParticipantComponent, AsInstructorComponent
	]
})
export class JoinWebinarModule { }
