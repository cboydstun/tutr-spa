import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultationsComponent } from './components';

const routes: Routes = [
	{
		path: '',
		component: ConsultationsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagedConsultationsRoutingModule { }
