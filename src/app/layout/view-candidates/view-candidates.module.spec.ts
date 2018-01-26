import {ViewCandidatesModule} from './view-candidates.module';


describe('ViewCandidatesModule', () => {
  let viewCandidatesModule;

  beforeEach(() => {
    viewCandidatesModule = new ViewCandidatesModule();
  });

  it('should create an instance', () => {
    expect(viewCandidatesModule).toBeTruthy();
  });
});
