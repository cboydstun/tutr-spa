import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
	AccountSettingsBasicsComponent,
	AccountSettingsPrivacyComponent,
	AccountSettingsLayoutComponent
} from './components';

const routes: Routes = [
	{
		path: '',
		component: AccountSettingsLayoutComponent,
		children: [
			{
				path: '',
				redirectTo: 'basics',
				pathMatch: 'full'
			},
			{
				path: 'basics',
				component: AccountSettingsBasicsComponent
			},
			{
				path: 'privacy',
				component: AccountSettingsPrivacyComponent
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountSettingsRoutingModule { }
