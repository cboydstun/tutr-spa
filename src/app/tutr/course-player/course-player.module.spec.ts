import { CoursePlayerModule } from './course-player.module';

describe('CoursePlayerModule', () => {
  let coursePlayerModule: CoursePlayerModule;

  beforeEach(() => {
    coursePlayerModule = new CoursePlayerModule();
  });

  it('should create an instance', () => {
    expect(coursePlayerModule).toBeTruthy();
  });
});
