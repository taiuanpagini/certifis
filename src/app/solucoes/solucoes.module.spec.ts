import { SolucoesModule } from './solucoes.module';

describe('SolucoesModule', () => {
  let solucoesModule: SolucoesModule;

  beforeEach(() => {
    solucoesModule = new SolucoesModule();
  });

  it('should create an instance', () => {
    expect(solucoesModule).toBeTruthy();
  });
});
