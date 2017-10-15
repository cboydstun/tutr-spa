import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerComponent, CoursePlayerComponent } from './components';

import {
	CourseResolve
} from '../../tutr/resolvers';

const routes: Routes = [
	{
		path: ':instructor_id/:id',
		component: CoursePlayerComponent,
		resolve: {
			course: CourseResolve
		},
		children: [
			{
				path: ':lecture',
				component: PlayerComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CoursePlayerRoutingModule { }
