import { ViewDetailsModule } from './view-details.module';

describe('ViewDetailsModule', () => {
  let viewDetailsModule: ViewDetailsModule;

  beforeEach(() => {
    viewDetailsModule = new ViewDetailsModule();
  });

  it('should create an instance', () => {
    expect(viewDetailsModule).toBeTruthy();
  });
});
