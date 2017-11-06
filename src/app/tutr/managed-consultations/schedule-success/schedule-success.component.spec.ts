import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleSuccessComponent } from './schedule-success.component';

describe('ScheduleSuccessComponent', () => {
  let component: ScheduleSuccessComponent;
  let fixture: ComponentFixture<ScheduleSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
