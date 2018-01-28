import { DettaglioCandidaturaModule } from './dettaglio-candidatura.module';

describe('DettaglioCandidaturaModule', () => {
  let dettaglioCandidaturaModule: DettaglioCandidaturaModule;

  beforeEach(() => {
    dettaglioCandidaturaModule = new DettaglioCandidaturaModule();
  });

  it('should create an instance', () => {
    expect(dettaglioCandidaturaModule).toBeTruthy();
  });
});
