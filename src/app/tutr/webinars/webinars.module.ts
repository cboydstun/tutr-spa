import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UikitModule } from '../../uikit/uikit.module';

import { WebinarsRoutingModule } from './webinars-routing.module';
import { WebinarsComponent } from './components';

@NgModule({
	imports: [
		CommonModule,
		WebinarsRoutingModule,
		UikitModule
	],
	declarations: [WebinarsComponent]
})
export class WebinarsModule { }
