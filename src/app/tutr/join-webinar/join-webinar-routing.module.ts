import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebinarResolve, ConsultationBookingResolve, UserProfileResolve } from '../resolvers';
import { OnlyLoggedInUsersGuard } from '../guards';

import { 
	WebinarRoomComponent,
	ConsultationRoomComponent
} from './components';

const routes: Routes = [
	{
		path: ':id',
		component: ConsultationRoomComponent,
		canActivate: [OnlyLoggedInUsersGuard],
		resolve: {
			consultationBooking: ConsultationBookingResolve,
			profile: UserProfileResolve
		}
	},
	{
		path: ':instructor_id/:id',
		component: WebinarRoomComponent,
		canActivate: [OnlyLoggedInUsersGuard],
		resolve: {
			webinar: WebinarResolve,
			profile: UserProfileResolve
		}
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class JoinWebinarRoutingModule { }
