import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './components';

@NgModule({
	imports: [
		CommonModule,
		HomepageRoutingModule
	],
	declarations: [HomepageComponent]
})
export class HomepageModule { }
