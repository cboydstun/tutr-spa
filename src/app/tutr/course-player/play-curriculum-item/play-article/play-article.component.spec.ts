import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayArticleComponent } from './play-article.component';

describe('PlayArticleComponent', () => {
  let component: PlayArticleComponent;
  let fixture: ComponentFixture<PlayArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
