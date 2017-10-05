import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumAttachOfferComponent } from './curriculum-attach-offer.component';

describe('CurriculumAttachOfferComponent', () => {
  let component: CurriculumAttachOfferComponent;
  let fixture: ComponentFixture<CurriculumAttachOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurriculumAttachOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumAttachOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
