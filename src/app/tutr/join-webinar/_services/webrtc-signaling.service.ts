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
			this.connection.onmessage = ({data}) => {
				obs.next.call(obs, JSON.parse(data));
			};

			this.connection.onerror   = obs.error.bind(obs);
			this.connection.onclose   = obs.complete.bind(obs);

			return this.connection.close.bind(this.connection);
		});

		let observer = {};

		this.messages = Subject.create(observer, observable);
	}

	private send(data: Object) {
		this.connection.send(JSON.stringify(data));
	}

	public join(data: {room: string, id: string}) {
		return this.whenWebSocketOpen.then(() => {
			this.send({
				room: data.room,
				id: data.id,
				ns: 'webinar',
				action: 'join'
			});
		});
	}

	public start(data: {room: string, id: string}) {
		return this.whenWebSocketOpen.then(() => {
			this.send({
				room: data.room,
				id: data.id,
				ns: 'webinar',
				action: 'start'
			});
		});
	}

	public leave(data: {room: string, id: string}) {
		return this.whenWebSocketOpen.then(() => {
			this.send({
				room: data.room,
				id: data.id,
				ns: 'webinar',
				action: 'leave'
			});
		});	
	}

	public sendCandidate(data: {room: string, id: string, to?: string, candidate: string}) {
		return this.whenWebSocketOpen.then(() => {
			this.send({
				room: data.room,
				id: data.id,
				to: data.to,
				ns: 'webinar',
				candidate: data.candidate,
				action: 'sendCandidate'
			});
		});	
	}

	public offer(data: {room: string, id: string, to: string, offer: string}) {
		return this.whenWebSocketOpen.then(() => {
			this.send({
				room: data.room,
				id: data.id,
				ns: 'webinar',
				offer: data.offer,
				action: 'offer',
				to: data.to
			});
		});	
	}

	public answer(data: {room: string, id: string, answer: string}) {
		return this.whenWebSocketOpen.then(() => {
			this.send({
				room: data.room,
				id: data.id,
				ns: 'webinar',
				answer: data.answer,
				action: 'answer'
			});
		});	
	}

}