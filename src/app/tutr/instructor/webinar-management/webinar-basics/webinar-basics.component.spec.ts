import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarBasicsComponent } from './webinar-basics.component';

describe('WebinarBasicsComponent', () => {
  let component: WebinarBasicsComponent;
  let fixture: ComponentFixture<WebinarBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebinarBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebinarBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
