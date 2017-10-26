import { InstructorsModule } from './instructors.module';

describe('InstructorsModule', () => {
  let instructorsModule: InstructorsModule;

  beforeEach(() => {
    instructorsModule = new InstructorsModule();
  });

  it('should create an instance', () => {
    expect(instructorsModule).toBeTruthy();
  });
});
