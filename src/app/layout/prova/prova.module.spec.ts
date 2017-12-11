import { ProvaModule } from './prova.module';

describe('ProvaModule', () => {
  let provaModule: ProvaModule;

  beforeEach(() => {
    provaModule = new ProvaModule();
  });

  it('should create an instance', () => {
    expect(provaModule).toBeTruthy();
  });
});
