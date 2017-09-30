import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from './layout/components';

import { PreloadCategoriesResolve } from './tutr/resolvers';

const routes: Routes = [
	{
		path: '',
		component: MainLayoutComponent,
		resolve: {
			categories: PreloadCategoriesResolve
		},
		children: [
			{
				path: '',
				loadChildren: './tutr/dash/dash.module#DashModule'
			},
			{
				path: 'courses',
				loadChildren: './tutr/courses/courses.module#CoursesModule'
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
