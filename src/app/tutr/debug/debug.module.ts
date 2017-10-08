import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebugRoutingModule } from './debug-routing.module';
import { DebugApiComponent } from './components';

import { 
	FormsModule, 
	ReactiveFormsModule 
} from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		DebugRoutingModule,
		FormsModule, 
		ReactiveFormsModule 
	],
	declarations: [DebugApiComponent]
})
export class DebugModule { }
