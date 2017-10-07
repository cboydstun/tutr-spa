import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DisqusModule } from './../disqus/disqus.module';

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
	QuizAnswerGroupComponent,
	ConversationThreadComponent,
	InstructorCardComponent
} from './components';

@NgModule({
	imports: [
		CommonModule,
		NgbModule.forRoot(),
		RouterModule,
		TranslateModule,
		FormsModule, 
		ReactiveFormsModule,
		DisqusModule
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
		QuizAnswerGroupComponent,
		ConversationThreadComponent,
		InstructorCardComponent
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
		ConversationThreadComponent,
		InstructorCardComponent,
		NgbModule
	]
})
export class UikitModule { }
