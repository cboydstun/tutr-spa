export class Webinar {
	id: string;
	title: string;
	subtitle: string;
	slug: string;
	description: string;
	archived: boolean;
	duration: number;
	start_dt: Date;
	instructor_name: string;
	instructor_id: string;
	status: string;

	constructor(data: any) {
		this.id = data.id;
		this.title = data.title;
		this.subtitle = data.subtitle;
		this.slug =  data.slug;
		this.description = data.description;
		this.archived = data.archived;
		this.duration = data.duration;
		this.start_dt = new Date(data.start_dt);
		this.instructor_name = data.instructor_name;
		this.instructor_id = data.instructor_id;
		this.status = data.status;
	}
}