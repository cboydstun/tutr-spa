import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarCardGridComponent } from './webinar-card-grid.component';

describe('WebinarCardGridComponent', () => {
  let component: WebinarCardGridComponent;
  let fixture: ComponentFixture<WebinarCardGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebinarCardGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebinarCardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
