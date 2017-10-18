import { Directive, ElementRef, OnInit, OnDestroy, HostBinding, Renderer2 } from '@angular/core';

@Directive({
	selector: '[tutrCursorAtRest]'
})
export class CursorAtRestDirective {
	@HostBinding('class.active') isActive = true;

	private timeout: any;

	constructor(
		public el: ElementRef, 
		public renderer: Renderer2) { }

	ngOnInit() {
		this.renderer.listen('document', 'mousemove', (event) => {
			this.isActive = true;

			clearTimeout(this.timeout);

			this.timeout = setTimeout(() => {
				this.isActive = false;
			}, 3000);
		});
	}

	ngOnDestroy() {
	}

}
