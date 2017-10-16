import { environment } from "../../../environments/environment";

import { CurriculumItem } from './curriculum-item';

export class Course {
	id: string;
	title: string;
	subtitle: string;
	slug: string;
	description: string;
	instructor_name: string;
	instructor_id: string;
	category_name: string;
	category_id: string
	curriculum: any[];
	goals: any;
	status: any;

	constructor(data: any) {
		this.id = data.id;
		this.title = data.title;
		this.subtitle = data.subtitle;
		this.slug = data.slug;
		this.description = data.description;
		this.instructor_name = data.instructor_name;
		this.instructor_id = data.instructor_id;
		this.category_name = data.category_name;
		this.category_id = data.category_id;
		this.curriculum = (data.curriculum || []).map(item => new CurriculumItem(item));
		this.goals = data.goals;
		this.status = data.status;
	}

	public get picture(): string {
		return `http://${environment.userContentBucket}.s3-website-${environment.region}.amazonaws.com/fly/240x135/course-image/${this.id}.png`;
	}

	public get biggerpicture(): string {
		return `http://${environment.userContentBucket}.s3-website-${environment.region}.amazonaws.com/fly/480x270/course-image/${this.id}.png`;
	}
}