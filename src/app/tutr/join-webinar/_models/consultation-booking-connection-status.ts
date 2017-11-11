import { ConnectionStatus } from './connection-status';

export class ConsultationBookingConnectionStatus extends ConnectionStatus {
	waitingForOther: boolean;

	constructor() {
		super();
		this.reset();
	}

	reset() {
		this.waitingForOther = false;
		super.reset();
	}
}