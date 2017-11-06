import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Consultation } from '../../models';

@Component({
	selector: 'tutr-consultation-layout',
	templateUrl: './consultation-layout.component.html',
	styleUrls: ['./consultation-layout.component.css']
})
export class ConsultationLayoutComponent implements OnInit {
	public consultation: Consultation;

	constructor(private activatedRoute: ActivatedRoute,
				private router: Router) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.consultation = data.consultation;
		});
	}

}
