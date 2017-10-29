import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPrompterComponent } from './video-prompter.component';

describe('VideoPrompterComponent', () => {
  let component: VideoPrompterComponent;
  let fixture: ComponentFixture<VideoPrompterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPrompterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPrompterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
