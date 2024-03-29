import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumGroupComponent } from './curriculum-group.component';

describe('CurriculumGroupComponent', () => {
  let component: CurriculumGroupComponent;
  let fixture: ComponentFixture<CurriculumGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurriculumGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
