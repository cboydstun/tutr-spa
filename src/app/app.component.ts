import { Component, ViewContainerRef } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { LoginService } from './tutr/services';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private translate: TranslateService,
				private loginService: LoginService,
				private toastr: ToastsManager, 
				vcr: ViewContainerRef) {

		translate.setDefaultLang('en');
		translate.use('uk');

		loginService.getAuthentionStatus();

		toastr.setRootViewContainerRef(vcr);
	}
}
