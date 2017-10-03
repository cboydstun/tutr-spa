import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
	FormsModule, 
	ReactiveFormsModule 
} from '@angular/forms';

import { AccountSettingsRoutingModule } from './account-settings-routing.module';
import { 
	AccountSettingsBasicsComponent, 
	AccountSettingsPrivacyComponent,
	AccountSettingsLayoutComponent 
} from './components';

@NgModule({
	imports: [
		CommonModule,
		AccountSettingsRoutingModule,
		FormsModule, 
		ReactiveFormsModule 
	],
	declarations: [AccountSettingsBasicsComponent, AccountSettingsPrivacyComponent, AccountSettingsLayoutComponent]
})
export class AccountSettingsModule { }
