import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { UikitModule } from '../../uikit/uikit.module';

import { InstructorsRoutingModule } from './instructors-routing.module';
import { InstructorsComponent } from './components';

@NgModule({
	imports: [
		CommonModule,
		InstructorsRoutingModule,
		TranslateModule,
		UikitModule
	],
	declarations: [InstructorsComponent]
})
export class InstructorsModule { }
