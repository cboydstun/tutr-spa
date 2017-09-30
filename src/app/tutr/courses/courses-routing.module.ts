import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
	CoursesCategoryComponent,
	CoursesSearchComponent,
	CourseDetailsComponent,
	CourseLearnComponent
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
		path: 'details/:course',
		component: CourseDetailsComponent,
		resolve: {
			course: CourseResolve
		}
	},
	{
		path: 'learn/:course',
		component: CourseLearnComponent,
		resolve: {
			course: CourseResolve
		}
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CoursesRoutingModule { }
