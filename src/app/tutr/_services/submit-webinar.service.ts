import { Webinar } from '../models';

export abstract  class SubmitWebinarService {
	abstract submit(webinar: Webinar): Promise<any>;
}