import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { CategoryService } from '../../../tutr/services';
import { Category } from '../../../tutr/models';

@Component({
	selector: 'tutr-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
	public categories: Category[];

	private subscription: Subscription;

	constructor(private categoryService: CategoryService) { }

	ngOnInit() {
		this.subscription = this.categoryService.categories.subscribe(categories => {
			this.categories = categories;
		});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
