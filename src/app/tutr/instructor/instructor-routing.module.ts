import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnlyLoggedInUsersGuard } from './../guards';

import { 
	DashboardComponent,
	DashboardCoursesComponent,
	DashboardWebinarsComponent,
	CourseManagementComponent,
	WebinarManagementComponent,
	CourseGoalsComponent,
	CourseLandingPageComponent,
	WebinarBasicsComponent,
	CreateCourseComponent,
	CreateWebinarComponent,
	CourseCurriculumComponent
} from './components';

import { 
	InstructorCoursesResolve,
	InstructorCourseResolve,
	InstructorWebinarsResolve,
	InstructorWebinarResolve,
	InstructorCourseGoalsResolve
} from '../resolvers';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'dashboard/courses',
		pathMatch: 'full'
	},
	{
		path: '',
		canActivateChild: [OnlyLoggedInUsersGuard],
		children: [
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
				path: 'course/:id',
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
						component: CourseGoalsComponent,
						resolve: {
							goals: InstructorCourseGoalsResolve
						}
					},
					{
						path: 'landing',
						component: CourseLandingPageComponent
					},
					{
						path: 'curriculum',
						component: CourseCurriculumComponent
					}
				]
			},
			{
				path: 'webinar/create',
				component: CreateWebinarComponent
			},
			{
				path: 'webinar/:id',
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
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class InstructorRoutingModule { }
