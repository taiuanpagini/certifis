import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SolucoesComponent } from './solucoes.component';

const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'parque-aquatico', component: SolucoesComponent }
    ])
  ],
  exports: [RouterModule]
})
export class SolucoesRoutingModule { }
