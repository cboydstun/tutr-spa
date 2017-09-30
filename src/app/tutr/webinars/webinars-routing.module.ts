import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebinarsComponent } from './components';

const routes: Routes = [
	{
		path: '',
		component: WebinarsComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class WebinarsRoutingModule { }
