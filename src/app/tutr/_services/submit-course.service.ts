import { Course } from '../models';

export abstract  class SubmitCourseService {
	abstract submit(course: Course): Promise<any>;
}