import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayCurriculumItemComponent } from './play-curriculum-item.component';

describe('PlayCurriculumItemComponent', () => {
  let component: PlayCurriculumItemComponent;
  let fixture: ComponentFixture<PlayCurriculumItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayCurriculumItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayCurriculumItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
