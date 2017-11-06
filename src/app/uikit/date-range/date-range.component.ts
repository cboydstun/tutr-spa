import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;


@Component({
	selector: 'tutr-date-range',
	templateUrl: './date-range.component.html',
	styleUrls: ['./date-range.component.css']
})
export class DateRangeComponent implements OnInit {
	@Output() onDateChange = new EventEmitter<{from: Date, to: Date}>();

	hoveredDate: NgbDateStruct;

	fromDate: NgbDateStruct;
	toDate: NgbDateStruct;

	constructor(calendar: NgbCalendar) {
		this.fromDate = calendar.getToday();
		this.toDate = calendar.getNext(calendar.getToday(), 'm', 1);
	}

	ngOnInit() {
		this.emit();
	}

	dateChanged(date: NgbDateStruct) {
		if (!this.fromDate && !this.toDate) {
			this.fromDate = date;
		} else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
			this.toDate = date;
		} else {
			this.toDate = null;
			this.fromDate = date;
		}

		if (this.fromDate && this.toDate) {
			this.emit();
		}
	}

	isHovered = date => this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate);
	isInside = date => after(date, this.fromDate) && before(date, this.toDate);
	isFrom = date => equals(date, this.fromDate);
	isTo = date => equals(date, this.toDate);

	private emit() {
		this.onDateChange.emit({
			from: new Date(this.fromDate.year, this.fromDate.month -1 , this.fromDate.day),
			to: new Date(this.toDate.year, this.toDate.month - 1, this.toDate.day),
		});
	}
}
