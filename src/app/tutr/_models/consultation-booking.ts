export class ConsultationBooking {
	id: string;
	consultation_title: string;
	consultation_id: string;
	slot_dt: Date;

	public ConsultationBooking(data) {
		this.id = data.id;
		this.consultation_title = data.consultation_title;
		this.consultation_id = data.consultation_id;
		this.slot_dt = data.slot_dt;
	}
}