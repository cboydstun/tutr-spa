import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
	LoginWithUsernameComponent,
	RegisterWithUsernameComponent,
	LayoutComponent,
	ChangeTempPasswordWithUsernameComponent
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
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CognitoRoutingModule { }
