import { PublicProfileModule } from './public-profile.module';

describe('PublicProfileModule', () => {
  let publicProfileModule: PublicProfileModule;

  beforeEach(() => {
    publicProfileModule = new PublicProfileModule();
  });

  it('should create an instance', () => {
    expect(publicProfileModule).toBeTruthy();
  });
});
