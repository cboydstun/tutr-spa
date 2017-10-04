import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './components';

import { HomepageResolve } from '../resolvers';

const routes: Routes = [
	{
		path: '',
		component: HomepageComponent,
		resolve: {
			homepage: HomepageResolve
		}
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HomepageRoutingModule { }
