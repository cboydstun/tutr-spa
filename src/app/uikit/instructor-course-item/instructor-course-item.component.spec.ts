import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorCourseItemComponent } from './instructor-course-item.component';

describe('InstructorCourseItemComponent', () => {
  let component: InstructorCourseItemComponent;
  let fixture: ComponentFixture<InstructorCourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorCourseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorCourseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
