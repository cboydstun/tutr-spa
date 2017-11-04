import { Subscription } from 'rxjs';

import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { Webinar, Profile } from '../../models';

import { 
	WebrtcSignalingService,
	ChatService
} from '../services';

@Component({
	selector: 'tutr-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
	@Input() webinar: Webinar;
	@Input() profile: Profile;

	public message: string = '';
	public messages: any[] = [];

	private signalingSubscription: Subscription;
	private messagesSubscription: Subscription;

	constructor(private webrtcSignalingService: WebrtcSignalingService,
				private chatService: ChatService) { }

	ngOnInit() {
		this.signalingSubscription = this.webrtcSignalingService.messages.subscribe((message: any) => {
			this.chatService.handle(message);
		});

		this.messagesSubscription = this.chatService.messages.subscribe(message => {
			this.messages.push(message);
		});
	}

	ngOnDestroy() {
		this.signalingSubscription.unsubscribe();
		this.messagesSubscription.unsubscribe();
	}

	public sendChatMessage() {
		this.webrtcSignalingService.sendChatMessage({
			room: this.webinar.id,
			message: this.message,
			sender: {
				name: this.profile.get_full_name,
				image: this.profile.chatpicture,
				id: this.profile.id
			}
		}).then(() => {
			this.message = '';
		});
	}

}
