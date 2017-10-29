import { Observable, Subscription } from 'rxjs';

import { Component, OnInit, OnDestroy } from '@angular/core';

import { TokenizeService } from '../services';

const INTERVAL: number = 1000 / 32;
const SPEED: number = 1 / 8;
const WORD_FRAME: number = 40;

const STATES = {
	EDITING: 1,
	PLAYING: 2,
}

@Component({
	selector: 'app-video-prompter',
	templateUrl: './video-prompter.component.html',
	styleUrls: ['./video-prompter.component.css']
})
export class VideoPrompterComponent implements OnInit, OnDestroy {
	public words: {literal: string, frame: number}[];
	public currentWordIndex: number = 0;
	public text: string = '';

	private state = STATES.EDITING;
	private frames: number = 0;
	private subscription: Subscription;

	public get isEditing(): boolean {
		return this.state === STATES.EDITING;
	}

	public get isPlaying(): boolean {
		return this.state === STATES.PLAYING;
	}

	constructor(private tokenizer: TokenizeService) { }

	ngOnInit() {
	}

	ngOnDestroy() {
		this.stop();
	}

	public start() {
		this.state = STATES.PLAYING;

		this.prepareWords(this.text);

		this.subscription = Observable.interval(INTERVAL * SPEED).subscribe(i => {
			this.frames++;

			if (this.frames >= this.words[this.currentWordIndex].frame) {
				this.currentWordIndex++;

				if (this.currentWordIndex > this.words.length - 1) {
					this.stop();
				}
			}
		});
	}

	public stop() {
		this.currentWordIndex = 0;
		this.frames = 0;
		this.subscription && this.subscription.unsubscribe();
		this.state = STATES.EDITING;
	}

	private getDelay(word: string): number {
		let delayTime = (1 + word.length / 5) * WORD_FRAME;

		if (/\.|,/.test(word)) {
			delayTime += WORD_FRAME * 4;
		};

		return delayTime;
	}

	private prepareWords(text: string) {
		let offset = WORD_FRAME * 4;

		this.words = [
			{
				literal: '',
				frame: offset
			}
		];

		this.words.push.apply(this.words, this.tokenizer.tokenize(text).map(word => {
			offset += this.getDelay(word);

			return {
				literal: word,
				frame: offset
			};
		}));
	}
}
