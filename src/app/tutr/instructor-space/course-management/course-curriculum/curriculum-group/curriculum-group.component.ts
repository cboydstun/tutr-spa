import { Component, OnInit, Input } from '@angular/core';

import { CurriculumService } from '../../../../services';

@Component({
	selector: 'uikit-curriculum-group',
	templateUrl: './curriculum-group.component.html',
	styleUrls: ['./curriculum-group.component.css']
})
export class CurriculumGroupComponent implements OnInit {
	@Input() curriculums: any[] = [];

	constructor(private curriculumService: CurriculumService) { }

	ngOnInit() {
	}

	public onDelete(curriculum: any) {
		this.curriculumService.delete(curriculum.id).then(() => {
			for (var i = this.curriculums.length - 1; i >= 0; i--) {
				if (this.curriculums[i].id === curriculum.id) {
					this.curriculums.splice(i, 1);
					return;
				}
			}
		});
	}

}
