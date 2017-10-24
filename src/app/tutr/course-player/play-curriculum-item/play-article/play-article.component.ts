import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'tutr-play-article',
    templateUrl: './play-article.component.html',
    styleUrls: ['./play-article.component.css']
})
export class PlayArticleComponent implements OnInit {
	@Input() lesson: any;

    constructor() { }

    ngOnInit() {
    }

}
