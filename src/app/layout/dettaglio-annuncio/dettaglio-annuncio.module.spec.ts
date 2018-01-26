import { DettaglioAnnuncioModule } from './dettaglio-annuncio.module';

describe('DettaglioAnnuncioModule', () => {
  let dettaglioAnnuncioModule: DettaglioAnnuncioModule;

  beforeEach(() => {
    dettaglioAnnuncioModule = new DettaglioAnnuncioModule();
  });

  it('should create an instance', () => {
    expect(dettaglioAnnuncioModule).toBeTruthy();
  });
});
