import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../../../tutr/services';
import { Category } from '../../../tutr/models';

import { environment } from '../../../../environments/environment';

@Component({
	selector: 'tutr-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	public categories: Category[];

	public headerLogo: string = environment.headerLogo;

	constructor(private categoryService: CategoryService) { }

	ngOnInit() {
		this.categories = this.categoryService.categories;
	}

}
