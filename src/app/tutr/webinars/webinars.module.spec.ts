import { WebinarsModule } from './webinars.module';

describe('WebinarsModule', () => {
  let webinarsModule: WebinarsModule;

  beforeEach(() => {
    webinarsModule = new WebinarsModule();
  });

  it('should create an instance', () => {
    expect(webinarsModule).toBeTruthy();
  });
});
