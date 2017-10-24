import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'tutr-play-quiz',
    templateUrl: './play-quiz.component.html',
    styleUrls: ['./play-quiz.component.css']
})
export class PlayQuizComponent implements OnInit {
	@Input() lesson: any;

    constructor() { }

    ngOnInit() {
    }

}
