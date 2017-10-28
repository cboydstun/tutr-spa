import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumAttachArticleComponent } from './curriculum-attach-article.component';

describe('CurriculumAttachArticleComponent', () => {
  let component: CurriculumAttachArticleComponent;
  let fixture: ComponentFixture<CurriculumAttachArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurriculumAttachArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumAttachArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
