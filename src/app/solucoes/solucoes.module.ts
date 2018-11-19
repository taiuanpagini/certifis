import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolucoesRoutingModule } from './solucoes-routing.module';
import { ECpfComponent } from './e-cpf/e-cpf.component';
import { ECnpjComponent } from './e-cnpj/e-cnpj.component';
import { MidiasComponent } from './midias/midias.component';

@NgModule({
  imports: [
    CommonModule,
    SolucoesRoutingModule
  ],
  declarations: [ECpfComponent, ECnpjComponent, MidiasComponent]
})
export class SolucoesModule { }
