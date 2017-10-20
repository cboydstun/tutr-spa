import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsInstructorComponent } from './as-instructor.component';

describe('AsInstructorComponent', () => {
  let component: AsInstructorComponent;
  let fixture: ComponentFixture<AsInstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsInstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
