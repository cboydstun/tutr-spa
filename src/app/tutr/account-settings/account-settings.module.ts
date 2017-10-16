import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { 
	FormsModule, 
	ReactiveFormsModule 
} from '@angular/forms';

import { AccountSettingsRoutingModule } from './account-settings-routing.module';
import { 
	AccountSettingsBasicsComponent, 
	AccountSettingsPrivacyComponent,
	AccountSettingsLayoutComponent,
	UserPictureComponent
} from './components';

@NgModule({
	imports: [
		CommonModule,
		AccountSettingsRoutingModule,
		FormsModule, 
		ReactiveFormsModule,
		TranslateModule.forChild()
	],
	declarations: [AccountSettingsBasicsComponent, AccountSettingsPrivacyComponent, AccountSettingsLayoutComponent, UserPictureComponent]
})
export class AccountSettingsModule { }
