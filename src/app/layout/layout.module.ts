import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
	],
	declarations: [MainLayoutComponent, FooterComponent, HeaderComponent, NakedLayoutComponent]
})
export class LayoutModule { }
