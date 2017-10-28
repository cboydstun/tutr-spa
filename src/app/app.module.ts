import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { 
	HttpClientModule, 
	HttpClient 
} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { TutrModule } from './tutr/tutr.module';
import { LayoutModule } from './layout/layout.module';
import { DisqusModule } from './disqus/disqus.module';

import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { NgProgressModule } from 'ngx-progressbar';

import { 
	TranslateModule, 
	TranslateLoader 
} from '@ngx-translate/core';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

export function createTranslateLoader(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		TutrModule,
		LayoutModule,
		AppRoutingModule,
		HttpClientModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: (createTranslateLoader),
				deps: [HttpClient]
			}
		}),
		DisqusModule.forRoot(environment.disqusShortName),
		NgProgressModule,
		ToastModule.forRoot(),
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
