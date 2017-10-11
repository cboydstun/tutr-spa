import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { ReplaySubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { Category } from '../models';

import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class CategoryService {
	private _categories = [];

	public get categories(): Category[] {
		return this._categories;
	};

	constructor(private httpClient: HttpClient,
				private translateService: TranslateService) { }

	loadCategories(): Promise<Category[]> {
		return this.httpClient.get<any[]>('/ListCategories').toPromise().then(rawList => {
			return Promise.all(rawList.map(rawCategory => {
				const slug = rawCategory.slug.replace(/\b\w/g, l => l.toUpperCase());
				return this.translateService.get(`categoryTitle${slug}`).toPromise().then((title: string) => {
					return {
						title,
						slug: rawCategory.slug
					}
				});
			}));
		}).then(categories => {
			this._categories = categories;
			return categories;
		});
	}

	get(slug: string): Category {
		return this.categories.find(c => c.slug === slug);;
	}

}