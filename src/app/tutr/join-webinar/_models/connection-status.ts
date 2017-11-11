export class ConnectionStatus {
	isJoining: boolean;
	isJoined: boolean;
	wsError: boolean;

	constructor() {
		this.reset();
	}

	reset() {
		this.isJoined = false;
		this.isJoining = false;
		this.wsError = false;
	}
}