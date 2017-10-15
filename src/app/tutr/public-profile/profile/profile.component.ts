import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'tutr-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	public profile: any;

	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.profile = data.profile;
		});
	}

}
