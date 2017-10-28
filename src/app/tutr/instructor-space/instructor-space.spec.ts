import { InstructorSpaceModule } from './instructor-space.module';

describe('InstructorSpaceModule', () => {
  let instructorModule: InstructorSpaceModule;

  beforeEach(() => {
    instructorModule = new InstructorSpaceModule();
  });

  it('should create an instance', () => {
    expect(instructorModule).toBeTruthy();
  });
});
