import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { EmpresaComponent } from './empresa/empresa.component';
import { SolucoesComponent } from './solucoes/solucoes.component';
import { PontosAtendimentoComponent } from './pontos-atendimento/pontos-atendimento.component';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent }
    ]),
    RouterModule.forChild([
      { path: '', component: HomeComponent },
      { path: 'empresa', component: EmpresaComponent },
      { path: 'solucoes', component: SolucoesComponent },
      { path: 'pontos-atendimento', component: PontosAtendimentoComponent },
      { path: 'contato', component: ContatoComponent }
    ])
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
