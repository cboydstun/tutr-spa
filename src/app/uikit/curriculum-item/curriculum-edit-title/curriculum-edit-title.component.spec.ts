import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumEditTitleComponent } from './curriculum-edit-title.component';

describe('CurriculumEditTitleComponent', () => {
  let component: CurriculumEditTitleComponent;
  let fixture: ComponentFixture<CurriculumEditTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurriculumEditTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumEditTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
