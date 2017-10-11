import { Component, OnInit } from '@angular/core';

import { environment } from '../../../../environments/environment';

@Component({
    selector: 'tutr-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
	public footerLogo: string = environment.footerLogo;
	public supportEmail: string = environment.supportEmail;

    constructor() { }

    ngOnInit() {
    }

}
