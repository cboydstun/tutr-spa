import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
	WebinarsComponent,
	WebinarDetailsComponent
} from './components';

import {
	AllWebinarsResolve,
	ArchivedWebinarsResolve,
	WebinarResolve
} from '../../tutr/resolvers';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: WebinarsComponent,
		resolve: {
			webinars: AllWebinarsResolve
		}
	},
	{
		path: 'archived',
		component: WebinarsComponent,
		resolve: {
			webinars: ArchivedWebinarsResolve
		}
	},
	{
		path: 'details/:webinar',
		component: WebinarDetailsComponent,
		resolve: {
			webinar: WebinarResolve
		}
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class WebinarsRoutingModule { }
