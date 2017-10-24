import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayCurriculumItemComponent, PlayerLayoutComponent } from './components';

import {
	CourseResolve,
	CurriculumItemResolve
} from '../../tutr/resolvers';

const routes: Routes = [
	{
		path: ':instructor_id/:id',
		component: PlayerLayoutComponent,
		resolve: {
			course: CourseResolve
		},
		children: [
			{
				path: ':curriculum_id',
				component: PlayCurriculumItemComponent,
				resolve: {
					curriculumItem: CurriculumItemResolve
				}
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CoursePlayerRoutingModule { }
