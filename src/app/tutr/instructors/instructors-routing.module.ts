import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstructorsComponent } from './components';

const routes: Routes = [
	{
		path: '',
		component: InstructorsComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class InstructorsRoutingModule { }
