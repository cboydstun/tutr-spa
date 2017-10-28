import { Subscription } from 'rxjs';

import { Component, OnInit, OnDestroy } from '@angular/core';

import { 
	CategoryService, 
	UserProfileService, 
	LoginService
} from '../../../tutr/services';
import { Category } from '../../../tutr/models';

import { environment } from '../../../../environments/environment';

@Component({
	selector: 'tutr-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
	public categories: Category[];

	public headerLogo: string = environment.headerLogo;

	public isAuthenticated: boolean = false;

	public isLoadingProfile: boolean = false;

	public searchEnabled: boolean = environment.searchEnabled;

	public displayName: string = '';

	public sub: string = '';

	public isInstructor: boolean = false;

	private isAuthenticatedSubscription: Subscription;

	constructor(private categoryService: CategoryService,
				private userProfileService: UserProfileService,
				private loginService: LoginService) { }

	ngOnInit() {
		this.categories = this.categoryService.categories;

		this.isAuthenticatedSubscription = this.loginService.isAuthenticated.subscribe((status: boolean) => {
			this.isAuthenticated = status;

			if (status) {
				this.getProfile();
			}
		});
	}

	ngOnDestroy() {
		this.isAuthenticatedSubscription.unsubscribe();
	}

	getProfile() {
		this.isLoadingProfile = true;

		this.userProfileService.getProfile()
			.then((profile) => {
				this.displayName = profile.email;
				this.sub = profile.id;
				this.isLoadingProfile = false;
				this.isInstructor = profile.is_instructor;
			})
			.catch(() => {
				this.isLoadingProfile = false;				
			});
	}

}
