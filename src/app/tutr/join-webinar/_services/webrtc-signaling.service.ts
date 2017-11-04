import { Observable, ReplaySubject, Observer } from 'rxjs';

import { Injectable } from '@angular/core';

import { Webinar, Profile } from '../../models';

import { environment } from "../../../../environments/environment";

@Injectable()
export class WebrtcSignalingService {
	private connection: any;
	private whenWebSocketOpen: any;

	public messages: ReplaySubject<Object> = new ReplaySubject<Object>(1);

	constructor() {
		this.connection = new WebSocket(environment.wsServerAddress);

		this.whenWebSocketOpen = new Promise((resolve, reject) => {
			this.connection.onopen = () => resolve(this.connection);
			this.connection.onerror = (e) => reject(e);
		});

		this.connection.onmessage = ({data}) => {
			this.messages.next.call(this.messages, JSON.parse(data));
		}

		this.connection.onerror = this.messages.error.bind(this.messages);
		this.connection.onclose = this.messages.complete.bind(this.messages);
	}

	private send(data: Object) {
		this.connection.send(JSON.stringify(data));
	}

	public disconnect() {
		this.connection.close();
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

	public sendChatMessage(data: {room: string, message: string, sender: any}) {
		return this.whenWebSocketOpen.then(() => {
			this.send({
				room: data.room,
				ns: 'webinar',
				message: data.message,
				action: 'sendChatMessage',
				sender: data.sender
			});
		});	
	}	

}