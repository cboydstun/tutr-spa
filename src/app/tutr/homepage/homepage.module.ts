import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UikitModule } from '../../uikit/uikit.module';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './components';

@NgModule({
	imports: [
		CommonModule,
		HomepageRoutingModule,
		UikitModule
	],
	declarations: [HomepageComponent]
})
export class HomepageModule { }
