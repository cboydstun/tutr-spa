import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'uikit-curriculum-group',
	templateUrl: './curriculum-group.component.html',
	styleUrls: ['./curriculum-group.component.css']
})
export class CurriculumGroupComponent implements OnInit {
	@Input() curriculums: any[] = [];

	constructor() { }

	ngOnInit() {
	}

}
