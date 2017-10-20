import { Injectable } from '@angular/core';

const constraints = {audio:true, video:true};

@Injectable()
export class UserMediaService {
	public stream: any = null;

	constructor() { }

	public ask() {
		if (this.stream) {
			return Promise.resolve(this.stream);
		}

		return new Promise((resolve, reject) => {
			navigator.mediaDevices.getUserMedia(constraints).then(stream => {
				this.stream = stream;
				resolve(stream);
			}, (err) => {
				reject(err);
			});
		});
	}

}
