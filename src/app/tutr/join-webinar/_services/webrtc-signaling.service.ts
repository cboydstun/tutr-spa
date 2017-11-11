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
			try {
				let json = JSON.parse(data);
				this.messages.next.call(this.messages, json);
			} catch(e) {
				console.error(data);
			}
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

	public join(data: {room: string, id: string, ns: string}) {
		return this.whenWebSocketOpen.then(() => {
			this.send({
				room: data.room,
				id: data.id,
				ns: data.ns,
				action: 'join'
			});
		});
	}

	public start(data: {room: string, id: string, ns: string}) {
		return this.whenWebSocketOpen.then(() => {
			this.send({
				room: data.room,
				id: data.id,
				ns: data.ns,
				action: 'start'
			});
		});
	}

	public leave(data: {room: string, id: string, ns: string}) {
		return this.whenWebSocketOpen.then(() => {
			this.send({
				room: data.room,
				id: data.id,
				ns: data.ns,
				action: 'leave'
			});
		});	
	}

	public sendCandidate(data: {room: string, id: string, to?: string, candidate: string, ns: string}) {
		return this.whenWebSocketOpen.then(() => {
			this.send({
				room: data.room,
				id: data.id,
				to: data.to,
				ns: data.ns,
				candidate: data.candidate,
				action: 'sendCandidate'
			});
		});	
	}

	public offer(data: {room: string, id: string, to?: string, offer: string, ns: string}) {
		return this.whenWebSocketOpen.then(() => {
			this.send({
				room: data.room,
				id: data.id,
				ns: data.ns,
				offer: data.offer,
				action: 'offer',
				to: data.to
			});
		});	
	}

	public answer(data: {room: string, id: string, answer: string, ns: string}) {
		return this.whenWebSocketOpen.then(() => {
			this.send({
				room: data.room,
				id: data.id,
				ns: data.ns,
				answer: data.answer,
				action: 'answer'
			});
		});	
	}

	public sendChatMessage(data: {room: string, message: string, sender: any, ns: string}) {
		return this.whenWebSocketOpen.then(() => {
			this.send({
				room: data.room,
				ns: data.ns,
				message: data.message,
				action: 'sendChatMessage',
				sender: data.sender
			});
		});	
	}	

}