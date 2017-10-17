import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-webinar-room',
	templateUrl: './webinar-room.component.html',
	styleUrls: ['./webinar-room.component.css']
})
export class WebinarRoomComponent implements OnInit {
	public isSidebarOpen: boolean = true;

	constructor() { }

	ngOnInit() {
	}

}
