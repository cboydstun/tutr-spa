import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationRoomComponent } from './consultation-room.component';

describe('ConsultationRoomComponent', () => {
  let component: ConsultationRoomComponent;
  let fixture: ComponentFixture<ConsultationRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
