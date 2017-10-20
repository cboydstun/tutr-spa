import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarControlsComponent } from './webinar-controls.component';

describe('WebinarRoomControlsComponent', () => {
  let component: WebinarControlsComponent;
  let fixture: ComponentFixture<WebinarControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebinarControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebinarControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
