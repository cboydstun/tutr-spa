import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const MODES = {
	NORMAL         : 1,
	EDIT_TITLE     : 2,
	ATTACH_VIDEO   : 3,
	ATTACH_ARTICLE : 4
};

@Component({
	selector: 'uikit-curriculum-item',
	templateUrl: './curriculum-item.component.html',
	styleUrls: ['./curriculum-item.component.css']
})
export class CurriculumItemComponent implements OnInit {
	@Input() curriculum: any;

	public expanded: boolean = false;

	private mode: number = MODES.NORMAL;

	constructor() { }

	ngOnInit() {
	}

	public turnOnEditTitleMode() {
		this.mode = MODES.EDIT_TITLE;
	}

	public turnOnNormalMode() {
		this.mode = MODES.NORMAL;
	}

	public turnOnAttachVideoMode() {
		this.mode = MODES.ATTACH_VIDEO;
	}

	public turnOnAttachArticleMode() {
		this.mode = MODES.ATTACH_ARTICLE;
	}

	public isEditTitleMode(): boolean {
		return this.mode == MODES.EDIT_TITLE;
	}

	public deleteArticle() {
		this.curriculum.contentType = null;
		this.curriculum.content = null;

		this.turnOnNormalMode();
	}

	public deleteVideo() {
		this.curriculum.contentType = null;
		this.curriculum.content = null;

		this.turnOnNormalMode();
	}

	public isNormalMode(): boolean {
		return this.mode == MODES.NORMAL;
	}

	public isAttachVideoMode(): boolean {
		return this.mode == MODES.ATTACH_VIDEO;
	}

	public isAttachArticleMode(): boolean {
		return this.mode == MODES.ATTACH_ARTICLE;
	}

	public isVideoContentType(): boolean {
		return this.curriculum.contentType === 'video';
	}

	public isArticleContentType(): boolean {
		return this.curriculum.contentType === 'article';
	}

	public isAnyContentType(): boolean {
		return !!this.curriculum.contentType;
	}

	public get articleContentPreview(): string {
		return this.curriculum.content ? this.curriculum.content.substring(0, 50) : '';
	}
}