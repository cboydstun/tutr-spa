import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-player',
	templateUrl: './player.component.html',
	styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
	public isSidebarOpen: boolean = true;

	constructor() { }

	ngOnInit() {
	}

}
