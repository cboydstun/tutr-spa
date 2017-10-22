import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnlyLoggedInUsersGuard } from './../guards';

import {
	AccountSettingsBasicsComponent,
	AccountSettingsPrivacyComponent,
	AccountSettingsLayoutComponent,
	PromoVideoComponent
} from './components';

import { UserProfileResolve } from '../resolvers';

const routes: Routes = [
	{
		path: '',
		component: AccountSettingsLayoutComponent,
		canActivateChild: [OnlyLoggedInUsersGuard],
		resolve: {
			profile: UserProfileResolve
		},
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
				path: 'promo-video',
				component: PromoVideoComponent
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
