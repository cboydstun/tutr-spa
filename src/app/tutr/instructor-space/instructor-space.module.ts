import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { 
	FormsModule, 
	ReactiveFormsModule 
} from '@angular/forms';

import { UikitModule } from '../../uikit/uikit.module';

import { InstructorSpaceRoutingModule } from './instructor-space-routing.module';
import { 
	DashboardComponent,
	DashboardCoursesComponent,
	DashboardWebinarsComponent,
	CourseManagementComponent,
	CourseGoalsComponent,
	CourseLandingPageComponent,
	WebinarManagementComponent,
	WebinarBasicsComponent,
	CreateCourseComponent,
	WorkingTitleFormComponent,
	CreateWebinarComponent,
	CourseCurriculumComponent,
	CoursePictureComponent,
	CurriculumItemComponent,
	CurriculumGroupComponent,
	CurriculumAttachOfferComponent,
	CurriculumAttachArticleComponent,
	CurriculumAttachVideoComponent,
	CurriculumEditTitleComponent,
	CurriculumQuizItemComponent,
	CurriculumQuizEditBasicsComponent,
	CurriculumQuizBuilderComponent,
	QuizQuestionComponent,
	QuizAnswerComponent,
	QuizAnswerGroupComponent,
} from './components';

@NgModule({
	imports: [
		CommonModule,
		InstructorSpaceRoutingModule,
		UikitModule,
		FormsModule, 
		ReactiveFormsModule,
		TranslateModule
	],
	declarations: [
		DashboardComponent, 
		DashboardCoursesComponent, 
		DashboardWebinarsComponent, 
		CourseManagementComponent, 
		CourseGoalsComponent, 
		CourseLandingPageComponent, 
		WebinarManagementComponent, 
		WebinarBasicsComponent, 
		CreateCourseComponent, 
		WorkingTitleFormComponent, 
		CreateWebinarComponent, 
		CourseCurriculumComponent, 
		CoursePictureComponent,
		CurriculumItemComponent,
		CurriculumGroupComponent,
		CurriculumAttachOfferComponent,
		CurriculumAttachArticleComponent,
		CurriculumAttachVideoComponent,
		CurriculumEditTitleComponent,
		CurriculumQuizItemComponent,
		CurriculumQuizEditBasicsComponent,
		CurriculumQuizBuilderComponent,
		QuizQuestionComponent,
		QuizAnswerComponent,
		QuizAnswerGroupComponent
	]
})
export class InstructorSpaceModule { }
