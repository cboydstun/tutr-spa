import { ReplaySubject } from 'rxjs';

import { ConnectionStatus } from '../_models/connection-status';
import { WebrtcSignalingService } from './webrtc-signaling.service';

export abstract class BaseCallService {
	public status = new ReplaySubject<ConnectionStatus>();

	public signalingData: any;

	protected _status: ConnectionStatus = new ConnectionStatus();

	constructor(protected webrtcSignalingService: WebrtcSignalingService) { }

	abstract handle(message: any);

	public join(): Promise<any> {
		return this.webrtcSignalingService.join(this.signalingData).then(() => {
			this._status.isJoining = true;
			this.status.next(this._status);
		});
	}

	public start(): Promise<any> {
		return this.webrtcSignalingService.start(this.signalingData).then(() => {
			this._status.isJoining = false;
			this._status.isJoined = true;
			this.status.next(this._status);
		});
	}

	public leave(): Promise<any> {
		return this.webrtcSignalingService.leave(this.signalingData).then(() => {
			this._status.reset();
			this.status.next(this._status);
		});
	}
}
