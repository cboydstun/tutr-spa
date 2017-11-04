import { ReplaySubject } from 'rxjs';

import { ConnectionStatus } from '../_models/connection-status';
import { WebrtcSignalingService } from './webrtc-signaling.service';

export abstract class BaseCallService {
	public status = new ReplaySubject<ConnectionStatus>(1);
	private messages = new ReplaySubject<any>(1);

	public signalingData: any;

	protected localStream: MediaStream;

	protected _status: ConnectionStatus = new ConnectionStatus();

	constructor(protected webrtcSignalingService: WebrtcSignalingService) { }

	abstract handle(message: any);

	abstract disconnect();

	public join(): Promise<any> {
		this._status.isJoining = true;
		this.status.next(this._status);

		return this.webrtcSignalingService.join(this.signalingData);
	}

	public start(stream: MediaStream): Promise<any> {
		this.localStream = stream;

		this._status.isJoining = true;
		this.status.next(this._status);

		return this.webrtcSignalingService.start(this.signalingData).then(() => {
			this._status.isJoining = false;
			this._status.isJoined = true;
			this.status.next(this._status);
		});
	}

	public leave(): Promise<any> {
		return this.webrtcSignalingService.leave(this.signalingData).then(() => {
			this.disconnect();
			this._status.reset();
			this.status.next(this._status);
		});
	}
}
