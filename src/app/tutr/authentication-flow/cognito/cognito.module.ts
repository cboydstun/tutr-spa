import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { 
	FormsModule, 
	ReactiveFormsModule 
} from '@angular/forms';

import { CognitoRoutingModule } from './cognito-routing.module';
import { UikitModule } from '../../../uikit/uikit.module';

import { 
	LoginWithUsernameComponent,
	RegisterWithUsernameComponent ,
	LayoutComponent
} from './components';

@NgModule({
	imports: [
		CommonModule,
		CognitoRoutingModule,
		UikitModule,
		FormsModule, 
		ReactiveFormsModule,
		TranslateModule.forChild()
	],
	declarations: [
		LoginWithUsernameComponent,
		RegisterWithUsernameComponent,
		LayoutComponent
	]
})
export class CognitoModule { }
