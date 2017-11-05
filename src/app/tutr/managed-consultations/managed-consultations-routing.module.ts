import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
	ConsultationsResolve, 
	ConsultationResolve 
} from '../resolvers';

import { 
	ConsultationsComponent, 
	ScheduleConsultationComponent 
} from './components';

const routes: Routes = [
	{
		path: '',
		component: ConsultationsComponent,
		resolve: {
			consultations: ConsultationsResolve
		}
	},
	{
		path: 'schedule/:id',
		component: ScheduleConsultationComponent,
		resolve: {
			consultation: ConsultationResolve
		}
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagedConsultationsRoutingModule { }
