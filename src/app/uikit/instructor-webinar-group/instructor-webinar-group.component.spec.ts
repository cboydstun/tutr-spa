import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorWebinarGroupComponent } from './instructor-webinar-group.component';

describe('InstructorWebinarGroupComponent', () => {
  let component: InstructorWebinarGroupComponent;
  let fixture: ComponentFixture<InstructorWebinarGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorWebinarGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorWebinarGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
