import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountSettingsRoutingModule } from './account-settings-routing.module';
import { 
	AccountSettingsBasicsComponent, 
	AccountSettingsPrivacyComponent,
	AccountSettingsLayoutComponent 
} from './components';

@NgModule({
	imports: [
		CommonModule,
		AccountSettingsRoutingModule
	],
	declarations: [AccountSettingsBasicsComponent, AccountSettingsPrivacyComponent, AccountSettingsLayoutComponent]
})
export class AccountSettingsModule { }
