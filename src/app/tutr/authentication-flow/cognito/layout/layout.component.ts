import { Component, OnInit } from '@angular/core';

import { environment } from '../../../../../environments/environment';

@Component({
    selector: 'tutr-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
	public authScreensLogo: string = environment.authScreensLogo;

    constructor() { }

    ngOnInit() {
    }

}
