import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { UikitModule } from '../../uikit/uikit.module';

import { WebinarsRoutingModule } from './webinars-routing.module';
import { 
	WebinarsComponent,
	WebinarDetailsComponent
} from './components';

@NgModule({
	imports: [
		CommonModule,
		WebinarsRoutingModule,
		UikitModule,
		TranslateModule.forChild()
	],
	declarations: [WebinarsComponent, WebinarDetailsComponent]
})
export class WebinarsModule { }
