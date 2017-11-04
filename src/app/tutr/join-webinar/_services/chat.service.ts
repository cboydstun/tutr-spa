import { Subscription, ReplaySubject, Subject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable()
export class ChatService {
	public messages = new ReplaySubject<any>();

	constructor() { }

	public handle(message: any) {
		switch (message.action) {
			case 'receiveChatMessage':
				this.messages.next(message);
				break;
		}
	}

}
