import { Observable, Subject, Observer } from 'rxjs';


import { Injectable } from '@angular/core';

import { Webinar, Profile } from '../../models';

@Injectable()
export class WebrtcSignalingService {
	private connection: any;
	private whenWebSocketOpen: any;

	public messages: Subject<Object>;

	constructor() {
		this.connection = new WebSocket('ws://localhost:8080');

		this.whenWebSocketOpen = new Promise((resolve, reject) => {
			this.connection.onopen = () => resolve(this.connection);
			this.connection.onerror = (e) => reject(e);
		});

		let observable = Observable.create((obs: Observer<MessageEvent>) => {
			this.connection.onmessage = obs.next.bind(obs);
			this.connection.onerror   = obs.error.bind(obs);
			this.connection.onclose   = obs.complete.bind(obs);

			return this.connection.close.bind(this.connection);
		});

		let observer = {};

		this.messages = Subject.create(observer, observable);
	}

	public join(webinar: Webinar, user: Profile) {
		this.connect().next({
			room: webinar.id,
			id: user.id,
			ns: 'webinar',
			action: 'join'
		});
	}

	public start(webinar: Webinar, user: Profile) {
		this.connect().next({
			room: webinar.id,
			id: user.id,
			ns: 'webinar',
			action: 'start'
		});
	}

}