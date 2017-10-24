import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { CoursePlayerRoutingModule } from './course-player-routing.module';
import { 
	PlayerComponent, 
	CoursePlayerComponent,
	PlayVideoComponent,
	PlayArticleComponent
} from './components';

import { UikitModule } from '../../uikit/uikit.module';
import { PlayQuizComponent } from './player/play-quiz/play-quiz.component';

@NgModule({
	imports: [
		CommonModule,
		CoursePlayerRoutingModule,
		UikitModule,
		TranslateModule
	],
	declarations: [PlayerComponent, CoursePlayerComponent, PlayVideoComponent, PlayArticleComponent, PlayQuizComponent]
})
export class CoursePlayerModule { }
