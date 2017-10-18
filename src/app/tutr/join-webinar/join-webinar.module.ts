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
import { IceService } from './services';

@NgModule({
	imports: [
		CommonModule,
		JoinWebinarRoutingModule,
		UikitModule,
		TranslateModule
	],
	providers: [
		IceService
	],
	declarations: [WebinarRoomComponent, CursorAtRestDirective, WebinarRoomControlsComponent]
})
export class JoinWebinarModule { }
