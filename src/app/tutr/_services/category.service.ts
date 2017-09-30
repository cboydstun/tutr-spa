import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { ReplaySubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { Category } from '../models';

@Injectable()
export class CategoryService {
	private _categoriesSubject = new ReplaySubject<Category[]>();

	public categories = this._categoriesSubject.asObservable();

	constructor(private httpClient: HttpClient) { }

	loadCategories(): Promise<Category[]> {
		return new Promise((resolve, reject) => {
			this._categoriesSubject.next([
				{
					name: 'Web Development',
					slug: 'web-development'
				},
				{
					name: 'AI',
					slug: 'ai'
				},
				{
					name: 'Marketing',
					slug: 'marketing'
				}
			]);

			resolve();
		});
	}

	get(slug: string): Promise<Category> {
		return Promise.resolve({
			name: 'Marketing',
			slug: 'marketing'
		});
	}

}