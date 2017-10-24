import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { CoursePlayerRoutingModule } from './course-player-routing.module';
import { 
	PlayCurriculumItemComponent, 
	PlayerLayoutComponent,
	PlayVideoComponent,
	PlayArticleComponent,
	PlayQuizComponent
} from './components';

import { UikitModule } from '../../uikit/uikit.module';

@NgModule({
	imports: [
		CommonModule,
		CoursePlayerRoutingModule,
		UikitModule,
		TranslateModule
	],
	declarations: [
		PlayCurriculumItemComponent, 
		PlayerLayoutComponent, 
		PlayVideoComponent, 
		PlayArticleComponent, 
		PlayQuizComponent
	]
})
export class CoursePlayerModule { }
