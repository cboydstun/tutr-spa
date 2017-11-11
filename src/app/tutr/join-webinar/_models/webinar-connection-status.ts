import { ConnectionStatus } from './connection-status';

export class WebinarConnectionStatus extends ConnectionStatus {
	waitingForInstructor: boolean;

	constructor() {
		super();
		this.reset();
	}

	reset() {
		this.waitingForInstructor = false;
		super.reset();
	}
}