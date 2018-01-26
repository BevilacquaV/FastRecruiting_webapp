import { CandidatiIdoneiModule } from './candidati-idonei.module';

describe('CandidatiIdoneiModule', () => {
  let candidatiIdoneiModule: CandidatiIdoneiModule;

  beforeEach(() => {
    candidatiIdoneiModule = new CandidatiIdoneiModule();
  });

  it('should create an instance', () => {
    expect(candidatiIdoneiModule).toBeTruthy();
  });
});
