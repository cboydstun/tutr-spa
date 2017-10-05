import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumQuizBuilderComponent } from './curriculum-quiz-builder.component';

describe('CurriculumQuizBuilderComponent', () => {
  let component: CurriculumQuizBuilderComponent;
  let fixture: ComponentFixture<CurriculumQuizBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurriculumQuizBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumQuizBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
