import { StudentSpaceModule } from './student-space.module';

describe('StudentSpaceModule', () => {
  let studentSpaceModule: StudentSpaceModule;

  beforeEach(() => {
    studentSpaceModule = new StudentSpaceModule();
  });

  it('should create an instance', () => {
    expect(studentSpaceModule).toBeTruthy();
  });
});
