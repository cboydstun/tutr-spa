import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
	FormsModule, 
	ReactiveFormsModule 
} from '@angular/forms';

import { CognitoRoutingModule } from './cognito-routing.module';
import { UikitModule } from '../../../uikit/uikit.module';

import { 
	LoginWithUsernameComponent,
	RegisterWithUsernameComponent 
} from './components';

@NgModule({
	imports: [
		CommonModule,
		CognitoRoutingModule,
		UikitModule,
		FormsModule, 
		ReactiveFormsModule 
	],
	declarations: [
		LoginWithUsernameComponent,
		RegisterWithUsernameComponent
	]
})
export class CognitoModule { }
