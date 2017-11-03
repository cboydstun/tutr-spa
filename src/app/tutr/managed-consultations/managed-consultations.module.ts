import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagedConsultationsRoutingModule } from './managed-consultations-routing.module';
import { ConsultationsComponent } from './components';

@NgModule({
	imports: [
		CommonModule,
		ManagedConsultationsRoutingModule
	],
	declarations: [ConsultationsComponent]
})
export class ManagedConsultationsModule { }
