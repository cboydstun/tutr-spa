import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { LoginService } from './tutr/services';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private translate: TranslateService,
				private loginService: LoginService) {
		translate.setDefaultLang('en');
		translate.use('ukr');

		loginService.getAuthentionStatus();
	}
}
