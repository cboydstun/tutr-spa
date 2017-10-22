import humanizeDuration from 'humanize-duration';

import { Pipe, PipeTransform } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Pipe({
	name: 'humanizeDuration'
})
export class HumanizeDurationPipe implements PipeTransform {

	constructor(private translate: TranslateService) {}

	transform(value: any, args?: any): any {
		return humanizeDuration(value * 60 * 1000, {
			language: 'uk'
		});
	}

}
