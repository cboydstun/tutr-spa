import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebinarRoomComponent } from './components';

const routes: Routes = [
	{
		path: ':id',
		component: WebinarRoomComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class JoinWebinarRoutingModule { }
