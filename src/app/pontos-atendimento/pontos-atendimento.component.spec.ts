import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PontosAtendimentoComponent } from './pontos-atendimento.component';

describe('PontosAtendimentoComponent', () => {
  let component: PontosAtendimentoComponent;
  let fixture: ComponentFixture<PontosAtendimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PontosAtendimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PontosAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
