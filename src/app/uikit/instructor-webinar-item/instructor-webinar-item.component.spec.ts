import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorWebinarItemComponent } from './instructor-webinar-item.component';

describe('InstructorWebinarItemComponent', () => {
  let component: InstructorWebinarItemComponent;
  let fixture: ComponentFixture<InstructorWebinarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorWebinarItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorWebinarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
