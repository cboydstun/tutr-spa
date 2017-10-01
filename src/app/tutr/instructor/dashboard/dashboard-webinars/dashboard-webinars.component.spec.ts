import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWebinarsComponent } from './dashboard-webinars.component';

describe('DashboardWebinarsComponent', () => {
  let component: DashboardWebinarsComponent;
  let fixture: ComponentFixture<DashboardWebinarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardWebinarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardWebinarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
