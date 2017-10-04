import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
	DashboardComponent,
	DashboardCoursesComponent,
	DashboardWebinarsComponent,
	CourseManagementComponent,
	WebinarManagementComponent,
	CourseGoalsComponent,
	CourseLandingPageComponent,
	WebinarBasicsComponent,
	CreateCourseComponent
} from './components';

import { 
	InstructorCoursesResolve,
	InstructorCourseResolve,
	InstructorWebinarsResolve,
	InstructorWebinarResolve,
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
				component: DashboardWebinarsComponent,
				resolve: {
					webinars: InstructorWebinarsResolve
				}
			}
		]
	},
	{
		path: 'course/create',
		component: CreateCourseComponent
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
	},
	{
		path: 'webinar/:webinar',
		component: WebinarManagementComponent,
		resolve: {
			webinar: InstructorWebinarResolve
		},
		children: [
			{
				path: '',
				redirectTo: 'basics',
				pathMatch: 'full'
			},
			{
				path: 'basics',
				component: WebinarBasicsComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class InstructorRoutingModule { }
