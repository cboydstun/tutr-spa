import * as AWS from "aws-sdk/global";
import 'rxjs/add/operator/do';

import { AwsSigner } from 'aws-sign-web';

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
			this.ngProgressService.start();

			if (!AWS.config.credentials || 
				/DescribeConsultation/.test(req.url) ||
				/DescribeCourse/.test(req.url) ||
				/DescribeHomepag/.test(req.url) ||
				/DescribePublicUserProfile/.test(req.url) ||
				/DescribeWebinar/.test(req.url) ||
				/ListArchivedWebinars/.test(req.url) ||
				/ListCategories/.test(req.url) ||
				/ListConsultationBookings/.test(req.url) ||
				/ListConsultations/.test(req.url) ||
				/ListCoursesByCategory/.test(req.url) ||
				/ListCoursesByInstructor/.test(req.url) ||
				/ListPublicUserProfiles/.test(req.url) ||
				/ListUpcomingWebinar/.test(req.url) ||
				/ResizePicture/.test(req.url)) {
				return next.handle(req.clone({
					url: `${environment.apiRoot}${req.url}`
				})).do(event => {
					if (event instanceof HttpResponse) {
						this.ngProgressService.done();
					}
				});
			}

			const signer = new AwsSigner({
				region: AWS.config.region,
				accessKeyId: AWS.config.credentials.accessKeyId,
				secretAccessKey: AWS.config.credentials.secretAccessKey,
				sessionToken: AWS.config.credentials.sessionToken
			});

			const signed = signer.sign({
				method: req.method,
				url: `${environment.apiRoot}${req.url}`,
				params: ((arr: string[]) => {
					return arr.reduce((acc, item) => {
						acc[item] = req.params.get(item);
						return acc;
					}, {});
				})(req.params.keys()),
				headers: {},
				data: req.body
			});

			if (!signed['Content-Type']) {
				signed['Content-Type'] = 'application/json';
			}

			const dupReq = req.clone({
				url: `${environment.apiRoot}${req.url}`,
				setHeaders: signed
			});

			return next.handle(dupReq)
				.do(event => {
					if (event instanceof HttpResponse) {
						this.ngProgressService.done();
					}
				});
		}
	}
}