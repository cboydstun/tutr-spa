import {
	Component,
	Input,
	Output,
	OnChanges,
	OnDestroy,
	ChangeDetectionStrategy,
	ElementRef,
	EventEmitter
} from '@angular/core';
import { DisqusService } from './disqus.service';
import { DisqusComment, DisqusReady } from './disqus.model';

@Component({
	selector: 'disqus',
	template: '<div id="disqus_thread"></div>',
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class DisqusComponent implements OnChanges, OnDestroy {

	/** DISQUS options */
	@Input() url: string;
	@Input() identifier: string;
	@Input() title: string;
	@Input() category: string;
	@Input() language: string;

	/** DISQUS events */
	@Output() onNewComment = new EventEmitter<DisqusComment>();
	@Output() onReady = new EventEmitter<DisqusReady>();
	@Output() onPaginate = new EventEmitter<any>();

	constructor(private el: ElementRef, private dService: DisqusService) { }

	ngOnChanges() {
		/** Reset Disqus if any input changed */
		if (!this.dService.window.DISQUS) {
			this.addDisqusScript();
		} else {
			this.reset();
		}
	}

	/** Add DISQUS script */
	addDisqusScript() {

		/** Set DISQUS config */
		this.dService.window.disqus_config = this.getConfig();

		const src = `https://${this.dService.shortname}.disqus.com/embed.js`

		const alreadyLoaded = () => {
			const scripts = document.getElementsByTagName('script');

			for (var i = 0; i < scripts.length; ++i) {
				if (scripts[i].getAttribute('id') == 'disqusScript') {
					return true;
				}
			}

			return false;
		}

		if (!alreadyLoaded()) {
            let node = document.createElement('script');
            node.src = src;
            node.type = 'text/javascript';
            node.async = true;
            node.charset = 'utf-8';
            node.id = 'disqusScript';
            node.setAttribute('data-timestamp', +new Date() + '');
            document.getElementsByTagName('head')[0].appendChild(node);
		}
	}

	/** Reset DISQUS with the new config */
	reset() {
		this.dService.window.DISQUS.reset({
			reload: true,
			config: this.getConfig()
		});
	}

	/** Create DISQUS config from inputs */
	getConfig() {
		const self = this;
		return function() {
			this.page.identifier = self.identifier;
			this.page.url = self.validateUrl(self.url);
			this.page.title = self.title;
			this.category_id = self.category;
			this.language = self.language;

			/* Available callbacks are afterRender, onInit, onNewComment, onPaginate, onReady, preData, preInit, preReset */
			this.callbacks.onNewComment = [(e) => {
				self.onNewComment.emit(e);
			}];

			this.callbacks.onReady = [(e) => {
				self.onReady.emit(e);
			}];

			this.callbacks.onPaginate = [(e) => {
				self.onPaginate.emit(e);
			}];
		};
	}

	validateUrl(url: string) {
		/** Validate URL input */
		if (url) {
			const r = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

			if (r.test(url)) {
				return url;
			} else {
				console.warn('[Disqus]: Invalid URL, return undefined');
			}
		}
		/** DISQUS will fallback to "Window.location.href" when URL is undefined */
		return undefined;
	}

	ngOnDestroy() {
		this.dService.window.disqus_config = undefined;
	}
}
