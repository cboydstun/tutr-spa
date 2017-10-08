import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugApiComponent } from './debug-api.component';

describe('DebugApiComponent', () => {
  let component: DebugApiComponent;
  let fixture: ComponentFixture<DebugApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebugApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
