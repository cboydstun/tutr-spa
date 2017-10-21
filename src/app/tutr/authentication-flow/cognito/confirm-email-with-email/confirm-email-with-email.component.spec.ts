import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmEmailWithEmailComponent } from './confirm-email-with-email.component';

describe('ConfirmEmailWithEmailComponent', () => {
  let component: ConfirmEmailWithEmailComponent;
  let fixture: ComponentFixture<ConfirmEmailWithEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmEmailWithEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmEmailWithEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
