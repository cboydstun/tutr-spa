import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
	FormsModule, 
	ReactiveFormsModule 
} from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { UikitModule } from '../../uikit/uikit.module';

import { ManagedConsultationsRoutingModule } from './managed-consultations-routing.module';

import { 
	ConsultationsComponent, 
	ScheduleConsultationComponent,
	ScheduleSuccessComponent,
	ConsultationLayoutComponent
} from './components';

@NgModule({
	imports: [
		CommonModule,
		ManagedConsultationsRoutingModule,
		UikitModule,
		TranslateModule,
		FormsModule, 
		ReactiveFormsModule 
	],
	declarations: [ConsultationsComponent, ScheduleConsultationComponent, ScheduleSuccessComponent, ConsultationLayoutComponent]
})
export class ManagedConsultationsModule { }
