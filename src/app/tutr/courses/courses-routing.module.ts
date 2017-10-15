import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
	CoursesCategoryComponent,
	CoursesSearchComponent,
	CourseDetailsComponent,
	CourseLearnComponent,
	CourseContentComponent,
	CourseOverviewComponent
} from './components';

import {
	CategoryCoursesResolve,
	CategoryResolve,
	CourseResolve
} from '../../tutr/resolvers';

const routes: Routes = [
	{
		path: 'category/:category',
		component: CoursesCategoryComponent,
		resolve: {
			courses: CategoryCoursesResolve,
			category: CategoryResolve
		}
	},
	{
		path: 'search',
		component: CoursesSearchComponent
	},
	{
		path: 'details/:instructor_id/:id/:slug',
		component: CourseDetailsComponent,
		resolve: {
			course: CourseResolve
		}
	},
	{
		path: 'learn/:instructor_id/:id/:slug',
		component: CourseLearnComponent,
		resolve: {
			course: CourseResolve
		},
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'overview'
			},
			{
				path: 'overview',
				component: CourseOverviewComponent
			},
			{
				path: 'content',
				component: CourseContentComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CoursesRoutingModule { }
