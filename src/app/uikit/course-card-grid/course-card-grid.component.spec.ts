import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardGridComponent } from './course-card-grid.component';

describe('CourseCardGridComponent', () => {
  let component: CourseCardGridComponent;
  let fixture: ComponentFixture<CourseCardGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCardGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
