import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnlyLoggedInUsersGuard } from './../guards';

import { StudentDashboardResolve } from './../resolvers';

import { DashboardComponent } from './components';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full'
	},
	{
		path: '',
		canActivateChild: [OnlyLoggedInUsersGuard],
		children: [
			{
				path: 'dashboard',
				component: DashboardComponent,
				resolve: {
					dashboard: StudentDashboardResolve
				}
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class StudentSpaceRoutingModule { }
