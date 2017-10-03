import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWithUsernameComponent } from './register-with-username.component';

describe('RegisterWithUsernameComponent', () => {
  let component: RegisterWithUsernameComponent;
  let fixture: ComponentFixture<RegisterWithUsernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterWithUsernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterWithUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
