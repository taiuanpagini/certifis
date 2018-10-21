import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { OwlModule } from 'ngx-owl-carousel';
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';
import { EmpresaComponent } from './empresa/empresa.component';
import { SolucoesComponent } from './solucoes/solucoes.component';
import { PontosAtendimentoComponent } from './pontos-atendimento/pontos-atendimento.component';
import { ContatoComponent } from './contato/contato.component';
import { EmpresaModule } from './empresa/empresa.module';
import { SolucoesModule } from './solucoes/solucoes.module';
import { PontosAtendimentoModule } from './pontos-atendimento/pontos-atendimento.module';
import { ContatoModule } from './contato/contato.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmpresaComponent,
    SolucoesComponent,
    PontosAtendimentoComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    EmpresaModule,
    SolucoesModule,
    PontosAtendimentoModule,
    ContatoModule,
    AppRoutingModule,
    OwlModule,
    ParallaxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
