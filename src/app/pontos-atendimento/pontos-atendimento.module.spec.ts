import { PontosAtendimentoModule } from './pontos-atendimento.module';

describe('PontosAtendimentoModule', () => {
  let pontosAtendimentoModule: PontosAtendimentoModule;

  beforeEach(() => {
    pontosAtendimentoModule = new PontosAtendimentoModule();
  });

  it('should create an instance', () => {
    expect(pontosAtendimentoModule).toBeTruthy();
  });
});
