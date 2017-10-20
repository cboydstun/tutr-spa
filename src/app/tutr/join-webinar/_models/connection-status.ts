export class ConnectionStatus {
	isJoining: boolean;
	isJoined: boolean;
	waitingForInstructor: boolean;

	constructor() {
		this.reset();
	}

	reset() {
		this.isJoined = false;
		this.isJoining = false;
		this.waitingForInstructor = false;
	}
}