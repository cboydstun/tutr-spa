import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
	MainLayoutComponent,
	FooterComponent,
	HeaderComponent,
} from './components';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
	],
	declarations: [MainLayoutComponent, FooterComponent, HeaderComponent]
})
export class LayoutModule { }
