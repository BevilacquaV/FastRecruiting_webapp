import { PublicAdModule } from './public-ad.module';

describe('PublicAdModule', () => {
  let publicAdModule: PublicAdModule;

  beforeEach(() => {
    publicAdModule = new PublicAdModule();
  });

  it('should create an instance', () => {
    expect(publicAdModule).toBeTruthy();
  });
});
