import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Homepage } from '../../models';

@Component({
	selector: 'tutr-homepage',
	templateUrl: './homepage.component.html',
	styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
	public homepage: Homepage;

	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.homepage = data.homepage;
		});
	}

}
