import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
	MainLayoutComponent, 
	NakedLayoutComponent 
} from './layout/components';

import { PreloadCategoriesResolve } from './tutr/resolvers';

import { environment } from '../environments/environment';

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
				loadChildren: './tutr/homepage/homepage.module#HomepageModule'
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
			}
		]
	},
	{
		path: 'auth',
		component: NakedLayoutComponent,
		children: [
			{
				path: '',
				loadChildren: './tutr/authentication-flow/cognito/cognito.module#CognitoModule'
			}
		]
	},
	{
		path: 'course-player',
		component: NakedLayoutComponent,
		children: [
			{
				path: '',
				loadChildren: './tutr/course-player/course-player.module#CoursePlayerModule'
			}
		]
	}
];

if (!environment.production) {
	routes.push({
		path: 'debug',
		loadChildren: './tutr/debug/debug.module#DebugModule'
	});
}

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
