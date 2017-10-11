import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
	LoginWithUsernameComponent,
	RegisterWithUsernameComponent,
	LayoutComponent,
	ChangeTempPasswordWithUsernameComponent,
	ConfirmEmailWithUsernameComponent
} from './components';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{
				path: 'login',
				component: LoginWithUsernameComponent
			},
			{
				path: 'register',
				component: RegisterWithUsernameComponent
			},
			{
				path: 'change-temp-password',
				component: ChangeTempPasswordWithUsernameComponent
			},
			{
				path: 'confirm-registration',
				component: ConfirmEmailWithUsernameComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CognitoRoutingModule { }
