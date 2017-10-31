import { environment } from "../../../environments/environment";

export class CurriculumItem {
	id: string;
	created_dt: string;
	course_id: string;
	instructor_id: string;
	title: string;
	type: string;
	content: string;
	content_type: string;
	description: string;
	questions: object;

	constructor(data: any) {
		this.id = data.id;
		this.created_dt = data.created_dt;
		this.course_id = data.course_id;
		this.instructor_id = data.instructor_id;
		this.title = data.title;
		this.type = data.type;
		this.content = data.content;
		this.content_type = data.content_type;
		this.description = data.description;
		this.questions = data.questions;
	}

	public get article(): string {
		return this.content;
	}

	public get video(): string {
		return `http://${environment.videoPipelineOutputBucket}.s3-website-${environment.region}.amazonaws.com/course/${this.course_id}/${this.id}.mp4`;
	}
}