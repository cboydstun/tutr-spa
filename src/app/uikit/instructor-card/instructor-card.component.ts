import { Component, OnInit, Input } from '@angular/core';

import { UserProfileService } from '../../tutr/services';

@Component({
	selector: 'uikit-instructor-card',
	templateUrl: './instructor-card.component.html',
	styleUrls: ['./instructor-card.component.css']
})
export class InstructorCardComponent implements OnInit {
	@Input() instructor: string;

	public profile: any;
	public isLoading: boolean = true;

	constructor(private userProfileService: UserProfileService) { }

	ngOnInit() {
		this.userProfileService.getPublicProfile(this.instructor)
			.then((profile) => {
				this.profile = profile;
				this.isLoading = false;
			})
			.catch(() => this.isLoading = false);
	}

}
