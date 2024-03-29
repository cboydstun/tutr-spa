import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { 
	FormsModule, 
	ReactiveFormsModule 
} from '@angular/forms';

import { UikitModule } from '../../uikit/uikit.module';

import { JoinWebinarRoutingModule } from './join-webinar-routing.module';

import { 
	WebinarRoomComponent, 
	WebinarControlsComponent,
	AsParticipantComponent,
	AsInstructorComponent,
	ChatComponent,
	ConsultationRoomComponent
} from './components';

import { CursorAtRestDirective } from './directives';
import { 
	WebrtcSignalingService,
	UserMediaService,
	PeerConnectionService,
	ParticipantCallService,
	InstructorCallService,
	ChatService,
	ConsultationCallService
} from './services';

@NgModule({
	imports: [
		CommonModule,
		JoinWebinarRoutingModule,
		UikitModule,
		TranslateModule,
		FormsModule, 
		ReactiveFormsModule 
	],
	providers: [
		WebrtcSignalingService,
		UserMediaService,
		PeerConnectionService,
		ParticipantCallService,
		InstructorCallService,
		ChatService,
		ConsultationCallService
	],
	declarations: [
		WebinarRoomComponent, 
		CursorAtRestDirective, 
		WebinarControlsComponent, AsParticipantComponent, AsInstructorComponent, ChatComponent, ConsultationRoomComponent
	]
})
export class JoinWebinarModule { }
