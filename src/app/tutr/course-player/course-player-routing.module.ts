import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerComponent } from './components';

const routes: Routes = [
	{
		path: 'course/:course/lecture/:lecture',
		component: PlayerComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CoursePlayerRoutingModule { }
