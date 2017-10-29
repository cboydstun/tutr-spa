import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { LayoutModule } from './../../layout/layout.module';
import { VideoPrompterRoutingModule } from './video-prompter-routing.module';

import { VideoPrompterComponent } from './components';

import { TokenizeService } from './services';

@NgModule({
	imports: [
		CommonModule,
		VideoPrompterRoutingModule,
		LayoutModule,
		TranslateModule,
		FormsModule
	],
	providers: [
		TokenizeService
	],
	declarations: [
		VideoPrompterComponent
	]
})
export class VideoPrompterModule { }
