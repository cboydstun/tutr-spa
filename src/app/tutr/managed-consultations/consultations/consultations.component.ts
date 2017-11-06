import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Consultation } from '../../models';

@Component({
	selector: 'app-consultations',
	templateUrl: './consultations.component.html',
	styleUrls: ['./consultations.component.css']
})
export class ConsultationsComponent implements OnInit {
	public consultations: Consultation[];

	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.data.subscribe(data => {
			this.consultations = data.consultations;
		});
	}

}
