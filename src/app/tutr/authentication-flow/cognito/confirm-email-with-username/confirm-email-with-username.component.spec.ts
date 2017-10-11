import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmEmailWithUsernameComponent } from './confirm-email-with-username.component';

describe('ConfirmEmailWithUsernameComponent', () => {
  let component: ConfirmEmailWithUsernameComponent;
  let fixture: ComponentFixture<ConfirmEmailWithUsernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmEmailWithUsernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmEmailWithUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
