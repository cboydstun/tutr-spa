import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumQuizEditBasicsComponent } from './curriculum-quiz-edit-basics.component';

describe('CurriculumQuizEditBasicsComponent', () => {
  let component: CurriculumQuizEditBasicsComponent;
  let fixture: ComponentFixture<CurriculumQuizEditBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurriculumQuizEditBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumQuizEditBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
