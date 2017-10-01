import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
	DashboardComponent,
	DashboardCoursesComponent,
	DashboardWebinarsComponent
} from './components';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'dashboard/courses',
		pathMatch: 'full'
	},
	{
		path: 'dashboard',
		component: DashboardComponent,
		children: [
			{
				path: 'courses',
				component: DashboardCoursesComponent
			},
			{
				path: 'webinars',
				component: DashboardWebinarsComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class InstructorRoutingModule { }
