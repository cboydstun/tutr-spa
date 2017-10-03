import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebinarsComponent } from './components';

import {
	AllWebinarsResolve,
} from '../../tutr/resolvers';

const routes: Routes = [
	{
		path: '',
		component: WebinarsComponent,
		resolve: {
			webinars: AllWebinarsResolve
		}
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class WebinarsRoutingModule { }
