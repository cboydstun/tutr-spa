import { Injectable } from '@angular/core';

@Injectable()
export class UserMediaService {
	public stream: any = null;

	constructor() { }

	public ask() {
		let mediaConstraints = { audio: true, video: true };

		const mediaPromise = navigator.mediaDevices.getUserMedia(mediaConstraints)
			.catch(function(error) {
				if (error.name !== 'NotFoundError') {
					throw error;
				}

				return navigator.mediaDevices.enumerateDevices()
					.then(function(devices) {
						let cam = devices.find(function(device) {
							return device.kind === 'videoinput';
						});

						let mic = devices.find(function(device) {
							return device.kind === 'audioinput';
						});

						let constraints = {
							video: cam && mediaConstraints.video,
							audio: mic && mediaConstraints.audio
						};

						return navigator.mediaDevices.getUserMedia(constraints);
					});
			})
			.then(stream => this.stream = stream);

		return mediaPromise;
	}

}
