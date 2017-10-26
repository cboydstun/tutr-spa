import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstructorsComponent } from './components';

import { AllPublicInstructorsResolve } from '../resolvers';

const routes: Routes = [
	{
		path: '',
		component: InstructorsComponent,
		resolve: {
			instructors: AllPublicInstructorsResolve
		}
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class InstructorsRoutingModule { }
