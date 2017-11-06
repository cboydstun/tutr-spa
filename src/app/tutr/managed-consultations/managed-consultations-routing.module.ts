import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
	ConsultationsResolve, 
	ConsultationResolve 
} from '../resolvers';

import { 
	ConsultationsComponent, 
	ScheduleConsultationComponent,
	ScheduleSuccessComponent,
	ConsultationLayoutComponent
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
		component: ConsultationLayoutComponent,
		resolve: {
			consultation: ConsultationResolve
		},
		children: [
			{
				path: '',
				component: ScheduleConsultationComponent
			},
			{
				path: 'success',
				component: ScheduleSuccessComponent
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagedConsultationsRoutingModule { }
