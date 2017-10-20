import { ReplaySubject, Subject } from 'rxjs';
import { ConnectionStatus } from '../_models/connection-status';

export interface WebinarFlowService {
	handle(message: Object);
	join(): Promise<any>;
	leave(): Promise<any>;
	dispose();
	setSignalingData(room: string, id: string);

	status: ReplaySubject<ConnectionStatus>;

	participantJoined: Subject<any>;
	instructorJoined: Subject<any>;
}
