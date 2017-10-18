import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarRoomControlsComponent } from './webinar-room-controls.component';

describe('WebinarRoomControlsComponent', () => {
  let component: WebinarRoomControlsComponent;
  let fixture: ComponentFixture<WebinarRoomControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebinarRoomControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebinarRoomControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
