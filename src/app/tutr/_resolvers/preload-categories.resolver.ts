import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Category } from '../models';
import { CategoryService } from '../services';

@Injectable()
export class PreloadCategoriesResolve implements Resolve<Category[]> {

	constructor(private categoryService: CategoryService) { }

	resolve(route: ActivatedRouteSnapshot) {
		return this.categoryService.loadCategories();
	}
}