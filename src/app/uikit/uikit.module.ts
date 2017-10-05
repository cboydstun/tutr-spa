import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { 
	FormsModule, 
	ReactiveFormsModule 
} from '@angular/forms';

import { 
	CourseCardComponent, 
	CourseCardGridComponent,
	InstructorCourseItemComponent,
	InstructorCourseGroupComponent,
	InstructorWebinarItemComponent,
	InstructorWebinarGroupComponent,
	WebinarCardComponent,
	WebinarCardGridComponent,
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
} from './components';

@NgModule({
	imports: [
		CommonModule,
		NgbModule.forRoot(),
		RouterModule,
		TranslateModule,
		FormsModule, 
		ReactiveFormsModule 
	],
	declarations: [
		CourseCardComponent, 
		CourseCardGridComponent, 
		InstructorCourseItemComponent,
		InstructorCourseGroupComponent,
		InstructorWebinarItemComponent,
		InstructorWebinarGroupComponent,
		WebinarCardComponent,
		WebinarCardGridComponent,
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
	],
	exports: [
		CourseCardComponent,
		CourseCardGridComponent,
		InstructorCourseItemComponent,
		InstructorCourseGroupComponent,
		InstructorWebinarItemComponent,
		InstructorWebinarGroupComponent,
		WebinarCardComponent,
		WebinarCardGridComponent,
		CurriculumItemComponent,
		CurriculumGroupComponent,
		NgbModule
	]
})
export class UikitModule { }
