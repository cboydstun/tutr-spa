import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingTitleFormComponent } from './working-title-form.component';

describe('WorkingTitleFormComponent', () => {
  let component: WorkingTitleFormComponent;
  let fixture: ComponentFixture<WorkingTitleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingTitleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingTitleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
