import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import  { WebinarResolve } from '../resolvers';

import { WebinarRoomComponent } from './components';

const routes: Routes = [
	{
		path: ':instructor_id/:id',
		component: WebinarRoomComponent,
		resolve: {
			webinar: WebinarResolve
		}
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class JoinWebinarRoutingModule { }
