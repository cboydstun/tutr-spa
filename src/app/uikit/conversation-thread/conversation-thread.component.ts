import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'uikit-conversation-thread',
	templateUrl: './conversation-thread.component.html',
	styleUrls: ['./conversation-thread.component.css']
})
export class ConversationThreadComponent implements OnInit {
	public pageId: string;

	constructor(private router: Router) {
		this.pageId = router.url;
	}

	ngOnInit() {
	}

}
