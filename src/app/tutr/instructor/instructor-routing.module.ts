import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
	DashboardComponent,
	DashboardCoursesComponent,
	DashboardWebinarsComponent,
	CourseManagementComponent,
	CourseGoalsComponent,
	CourseLandingPageComponent
} from './components';

import { 
	InstructorCoursesResolve,
	InstructorCourseResolve
} from '../resolvers';

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
				component: DashboardCoursesComponent,
				resolve: {
					courses: InstructorCoursesResolve
				}
			},
			{
				path: 'webinars',
				component: DashboardWebinarsComponent
			}
		]
	},
	{
		path: 'course/:course',
		component: CourseManagementComponent,
		resolve: {
			course: InstructorCourseResolve
		},
		children: [
			{
				path: '',
				redirectTo: 'goals',
				pathMatch: 'full'
			},
			{
				path: 'goals',
				component: CourseGoalsComponent
			},
			{
				path: 'landing',
				component: CourseLandingPageComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class InstructorRoutingModule { }
