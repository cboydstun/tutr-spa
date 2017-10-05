import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { UikitModule } from '../uikit/uikit.module';

import {
	MainLayoutComponent,
	FooterComponent,
	HeaderComponent,
	NakedLayoutComponent
} from './components';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		UikitModule,
		TranslateModule.forChild()
	],
	declarations: [MainLayoutComponent, FooterComponent, HeaderComponent, NakedLayoutComponent]
})
export class LayoutModule { }
