import { PianificaColloquioModule } from './pianifica-colloquio.module';

describe('PianificaColloquioModule', () => {
  let pianificaColloquioModule: PianificaColloquioModule;

  beforeEach(() => {
    pianificaColloquioModule = new PianificaColloquioModule();
  });

  it('should create an instance', () => {
    expect(pianificaColloquioModule).toBeTruthy();
  });
});
