import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettingsBasicsComponent } from './account-settings-basics.component';

describe('AccountSettingsBasicsComponent', () => {
  let component: AccountSettingsBasicsComponent;
  let fixture: ComponentFixture<AccountSettingsBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSettingsBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSettingsBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
