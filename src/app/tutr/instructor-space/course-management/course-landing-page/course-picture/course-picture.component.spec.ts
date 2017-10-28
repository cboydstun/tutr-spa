import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePictureComponent } from './course-picture.component';

describe('CoursePictureComponent', () => {
  let component: CoursePictureComponent;
  let fixture: ComponentFixture<CoursePictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
