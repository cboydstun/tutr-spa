import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebinarsRoutingModule } from './webinars-routing.module';
import { WebinarsComponent } from './components';

@NgModule({
	imports: [
		CommonModule,
		WebinarsRoutingModule
	],
	declarations: [WebinarsComponent]
})
export class WebinarsModule { }
