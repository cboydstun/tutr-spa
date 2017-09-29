import { TutrModule } from './tutr.module';

describe('CoreModule', () => {
  let coreModule: TutrModule;

  beforeEach(() => {
    coreModule = new TutrModule();
  });

  it('should create an instance', () => {
    expect(coreModule).toBeTruthy();
  });
});
