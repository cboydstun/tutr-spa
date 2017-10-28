import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumAttachVideoComponent } from './curriculum-attach-video.component';

describe('CurriculumAttachVideoComponent', () => {
  let component: CurriculumAttachVideoComponent;
  let fixture: ComponentFixture<CurriculumAttachVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurriculumAttachVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumAttachVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
