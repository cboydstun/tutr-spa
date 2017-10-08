import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTempPasswordWithUsernameComponent } from './change-temp-password-with-username.component';

describe('ChangeTempPasswordWithUsernameComponent', () => {
  let component: ChangeTempPasswordWithUsernameComponent;
  let fixture: ComponentFixture<ChangeTempPasswordWithUsernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeTempPasswordWithUsernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeTempPasswordWithUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
