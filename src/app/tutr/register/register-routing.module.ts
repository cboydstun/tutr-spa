import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterWithUsernameComponent } from './components';

const routes: Routes = [
	{
		path: '',
		component: RegisterWithUsernameComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RegisterRoutingModule { }
