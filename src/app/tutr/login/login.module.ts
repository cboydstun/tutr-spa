import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
	FormsModule, 
	ReactiveFormsModule 
} from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginWithUsernameComponent } from './components';

@NgModule({
	imports: [
		CommonModule,
		LoginRoutingModule,
		FormsModule, 
		ReactiveFormsModule 
	],
	declarations: [LoginWithUsernameComponent]
})
export class LoginModule { }
