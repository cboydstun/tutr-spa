import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { 
	HttpClientModule, 
	HttpClient 
} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { TutrModule } from './tutr/tutr.module';
import { LayoutModule } from './layout/layout.module';
import { DisqusModule } from './disqus/disqus.module';

import { 
	TranslateModule, 
	TranslateLoader 
} from '@ngx-translate/core';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';

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
		DisqusModule.forRoot('tutrio')
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
