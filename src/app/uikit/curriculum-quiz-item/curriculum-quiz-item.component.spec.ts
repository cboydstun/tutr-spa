import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumQuizItemComponent } from './curriculum-quiz-item.component';

describe('CurriculumQuizItemComponent', () => {
  let component: CurriculumQuizItemComponent;
  let fixture: ComponentFixture<CurriculumQuizItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurriculumQuizItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumQuizItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
