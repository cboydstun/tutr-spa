import { Injectable } from '@angular/core';

@Injectable()
export class TokenizeService {
	public tokenize(text: string): string[] {
		return text.match(/\s*(\S+\s*\-?\:?\-?)\s*/g) || [];
	}
}
