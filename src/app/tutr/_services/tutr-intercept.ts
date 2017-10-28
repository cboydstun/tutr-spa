import * as AWS from "aws-sdk/global";
import 'rxjs/add/operator/do';

import { Injectable } from '@angular/core';
import { 
	HttpEvent, 
	HttpInterceptor, 
	HttpHandler, 
	HttpRequest, 
	HttpResponse, 
	HttpErrorResponse 
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from "../../../environments/environment";

import { LoginService } from './login.service';

import { NgProgressService } from 'ngx-progressbar';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class TutrInterceptor implements HttpInterceptor {

	constructor(private loginService: LoginService,
				private ngProgressService: NgProgressService,
				private toastr: ToastsManager) { }

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

			this.ngProgressService.start();

			return next.handle(dupReq)
				.do(event => {
					if (event instanceof HttpResponse) {
						this.ngProgressService.done();
					}
				}).catch((error: any) => {
					if (error instanceof HttpErrorResponse) {
						if (error.status === 403) {
							return this.loginService.getAuthentionStatus().then((status: boolean) => {
								if (status) {
									return next.handle(dupReq);
								}
							});
						} else {
							this.ngProgressService.done();
							this.toastr.error('Site may not work as expected', 'Internal server error');
						}
					}
				});
		}
	}
}