import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './components';

import { PublicUserProfileResolve } from '../resolvers';

const routes: Routes = [
	{
		path: ':id',
		component: ProfileComponent,
		resolve: {
			profile: PublicUserProfileResolve
		}
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicProfileRoutingModule { }
