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
			},
			{
				path: 'webinars',
				loadChildren: './tutr/webinars/webinars.module#WebinarsModule'
			},
			{
				path: 'profile',
				loadChildren: './tutr/public-profile/public-profile.module#PublicProfileModule'
			},
			{
				path: 'account',
				loadChildren: './tutr/account-settings/account-settings.module#AccountSettingsModule'
			},
			{
				path: 'instructor',
				loadChildren: './tutr/instructor/instructor.module#InstructorModule'
			},
			{
				path: 'login',
				loadChildren: './tutr/login/login.module#LoginModule'
			},
			{
				path: 'register',
				loadChildren: './tutr/register/register.module#RegisterModule'
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
