import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebinarsComponent } from './components';

import {
	AllWebinarsResolve,
	ArchivedWebinarsResolve
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
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class WebinarsRoutingModule { }
