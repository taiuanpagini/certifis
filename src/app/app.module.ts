import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { OwlModule } from 'ngx-owl-carousel';
import { EmpresaComponent } from './empresa/empresa.component';
import { SolucoesComponent } from './solucoes/solucoes.component';
import { PontosAtendimentoComponent } from './pontos-atendimento/pontos-atendimento.component';
import { ContatoComponent } from './contato/contato.component';
import { EmpresaModule } from './empresa/empresa.module';
import { SolucoesModule } from './solucoes/solucoes.module';
import { PontosAtendimentoModule } from './pontos-atendimento/pontos-atendimento.module';
import { ContatoModule } from './contato/contato.module';
import { StorageService } from './providers/storage';
import { GlobalsService } from './providers/globals';
import { HttpService } from './providers/http';
import { ConnectService } from './providers/connect';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { Http, HttpModule } from '@angular/http';
import {NgxMaskModule} from 'ngx-mask'

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
    FormsModule,
    HttpModule,
    EmpresaModule,
    SolucoesModule,
    PontosAtendimentoModule,
    ContatoModule,
    AppRoutingModule,
    OwlModule,
    SnotifyModule,
    NgxMaskModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    StorageService,
    GlobalsService,
    HttpService,
    ConnectService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
