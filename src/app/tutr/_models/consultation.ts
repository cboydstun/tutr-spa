export class Consultation {
	id: string;
	title: string;
	description: string;
	rrule: string;

	public Consultation(data) {
		this.id = data.id;
		this.title = data.title;
		this.description = data.description;
		this.rrule = data.rrule;
	}
}