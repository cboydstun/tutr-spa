import * as AWS from "aws-sdk/global";
import 'rxjs/add/operator/do';

import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from "../../../environments/environment";

import { LoginService } from './login.service';

@Injectable()
export class TutrInterceptor implements HttpInterceptor {

	constructor(private loginService: LoginService) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (/assets/.test(req.url)) {
			return next.handle(req.clone({}));
		} else {
			const dupReq = req.clone({
				url: `${environment.apiRoot}${req.url}`,
				setHeaders: {
					'Authorization': this.loginService.idToken
				}
			});

			return next.handle(dupReq);
		}
	}
}