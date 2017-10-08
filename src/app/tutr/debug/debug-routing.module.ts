import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DebugApiComponent } from './components';

const routes: Routes = [
	{
		path: 'api',
		component: DebugApiComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DebugRoutingModule { }
