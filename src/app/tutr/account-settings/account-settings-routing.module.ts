import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnlyLoggedInUsersGuard } from './../guards';

import {
	AccountSettingsBasicsComponent,
	AccountSettingsPrivacyComponent,
	AccountSettingsLayoutComponent
} from './components';

import { UserProfileResolve } from '../resolvers';

const routes: Routes = [
	{
		path: '',
		component: AccountSettingsLayoutComponent,
		canActivateChild: [OnlyLoggedInUsersGuard],
		children: [
			{
				path: '',
				redirectTo: 'basics',
				pathMatch: 'full'
			},
			{
				path: 'basics',
				component: AccountSettingsBasicsComponent,
				resolve: {
					profile: UserProfileResolve
				}
			},
			{
				path: 'privacy',
				component: AccountSettingsPrivacyComponent,
				resolve: {
					profile: UserProfileResolve
				}
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AccountSettingsRoutingModule { }
