import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorCourseGroupComponent } from './instructor-course-group.component';

describe('InstructorCourseGroupComponent', () => {
  let component: InstructorCourseGroupComponent;
  let fixture: ComponentFixture<InstructorCourseGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorCourseGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorCourseGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
