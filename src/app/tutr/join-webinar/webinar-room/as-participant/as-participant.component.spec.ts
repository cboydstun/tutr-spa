import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsParticipantComponent } from './as-participant.component';

describe('AsParticipantComponent', () => {
  let component: AsParticipantComponent;
  let fixture: ComponentFixture<AsParticipantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsParticipantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
