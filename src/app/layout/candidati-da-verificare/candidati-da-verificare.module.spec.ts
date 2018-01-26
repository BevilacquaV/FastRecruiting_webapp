import { CandidatiDaVerificareModule } from './candidati-da-verificare.module';

describe('CandidatiDaVerificareModule', () => {
  let candidatiDaVerificareModule: CandidatiDaVerificareModule;

  beforeEach(() => {
    candidatiDaVerificareModule = new CandidatiDaVerificareModule();
  });

  it('should create an instance', () => {
    expect(candidatiDaVerificareModule).toBeTruthy();
  });
});
