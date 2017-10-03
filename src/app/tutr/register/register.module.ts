import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
	FormsModule, 
	ReactiveFormsModule 
} from '@angular/forms';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterWithUsernameComponent } from './components';

@NgModule({
	imports: [
		CommonModule,
		RegisterRoutingModule,
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [RegisterWithUsernameComponent]
})
export class RegisterModule { }
