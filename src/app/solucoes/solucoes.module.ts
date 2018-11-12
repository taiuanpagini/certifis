import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolucoesRoutingModule } from './solucoes-routing.module';
import { ECpfComponent } from './e-cpf/e-cpf.component';
import { ECnpjComponent } from './e-cnpj/e-cnpj.component';

@NgModule({
  imports: [
    CommonModule,
    SolucoesRoutingModule
  ],
  declarations: [ECpfComponent, ECnpjComponent]
})
export class SolucoesModule { }
