import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
	LoginWithUsernameComponent,
	RegisterWithUsernameComponent,
	RegisterWithEmailComponent,
	LayoutComponent,
	ChangeTempPasswordWithUsernameComponent,
	ConfirmEmailWithUsernameComponent,
	ConfirmEmailWithEmailComponent,
	LoginWithEmailComponent,
	LogoutComponent
} from './components';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{
				path: 'login',
				component: LoginWithEmailComponent
			},
			{
				path: 'register',
				component: RegisterWithEmailComponent
			},
			{
				path: 'change-temp-password',
				component: ChangeTempPasswordWithUsernameComponent
			},
			{
				path: 'confirm-registration',
				component: ConfirmEmailWithEmailComponent
			},
			{
				path: 'logout',
				component: LogoutComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CognitoRoutingModule { }
