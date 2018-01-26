import { CandidatiNonIdoneiModule } from './candidati-non-idonei.module';

describe('CandidatiNonIdoneiModule', () => {
  let candidatiNonIdoneiModule: CandidatiNonIdoneiModule;

  beforeEach(() => {
    candidatiNonIdoneiModule = new CandidatiNonIdoneiModule();
  });

  it('should create an instance', () => {
    expect(candidatiNonIdoneiModule).toBeTruthy();
  });
});
