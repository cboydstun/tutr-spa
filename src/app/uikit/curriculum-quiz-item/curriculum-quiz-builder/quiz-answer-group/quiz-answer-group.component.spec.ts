import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAnswerGroupComponent } from './quiz-answer-group.component';

describe('QuizAnswerGroupComponent', () => {
  let component: QuizAnswerGroupComponent;
  let fixture: ComponentFixture<QuizAnswerGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizAnswerGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizAnswerGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
