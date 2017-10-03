import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
	LoginWithUsernameComponent,
	RegisterWithUsernameComponent
} from './components';

const routes: Routes = [
	{
		path: 'login',
		component: LoginWithUsernameComponent
	},
	{
		path: 'register',
		component: RegisterWithUsernameComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CognitoRoutingModule { }
