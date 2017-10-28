import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarManagementComponent } from './webinar-management.component';

describe('WebinarManagementComponent', () => {
  let component: WebinarManagementComponent;
  let fixture: ComponentFixture<WebinarManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebinarManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebinarManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
