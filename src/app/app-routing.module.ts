import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { EmpresaComponent } from './empresa/empresa.component';
import { SolucoesComponent } from './solucoes/solucoes.component';
import { PontosAtendimentoComponent } from './pontos-atendimento/pontos-atendimento.component';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'solucoes', component: SolucoesComponent },
  { path: 'pontos-atendimento', component: PontosAtendimentoComponent },
  { path: 'contato', component: ContatoComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: false })
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
