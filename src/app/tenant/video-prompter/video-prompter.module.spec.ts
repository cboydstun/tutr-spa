import { VideoPrompterModule } from './video-prompter.module';

describe('VideoPrompterModule', () => {
  let videoPrompterModule: VideoPrompterModule;

  beforeEach(() => {
    videoPrompterModule = new VideoPrompterModule();
  });

  it('should create an instance', () => {
    expect(videoPrompterModule).toBeTruthy();
  });
});
