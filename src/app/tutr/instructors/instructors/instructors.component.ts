import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Profile } from '../../models';

@Component({
	selector: 'app-instructors',
	templateUrl: './instructors.component.html',
	styleUrls: ['./instructors.component.css']
})
export class InstructorsComponent implements OnInit {
	public instructors: Profile[];

	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.instructors = data.instructors;
		});
	}

}
