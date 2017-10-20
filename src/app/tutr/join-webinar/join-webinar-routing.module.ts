import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebinarResolve, UserProfileResolve } from '../resolvers';
import { OnlyLoggedInUsersGuard } from '../guards';

import { 
	WebinarRoomComponent
} from './components';

const routes: Routes = [
	{
		path: ':instructor_id/:id',
		component: WebinarRoomComponent,
		canActivate: [OnlyLoggedInUsersGuard],
		resolve: {
			webinar: WebinarResolve,
			profile: UserProfileResolve
		}
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class JoinWebinarRoutingModule { }
