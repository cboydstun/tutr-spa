import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmForgottenPasswordComponent } from './confirm-forgotten-password.component';

describe('ConfirmForgottenPasswordComponent', () => {
  let component: ConfirmForgottenPasswordComponent;
  let fixture: ComponentFixture<ConfirmForgottenPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmForgottenPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmForgottenPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
