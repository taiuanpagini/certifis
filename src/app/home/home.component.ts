import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { HttpService } from '../providers/http';
import { GlobalsService } from '../providers/globals';
import { StorageService } from '../providers/storage';
import { ConnectService } from '../providers/connect';
import { SnotifyService } from 'ng-snotify';

declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  model: any = {
    Assunto: "Newsletter Via Site"
  };

  //public sliderOptions: any = {items: 3, dots: false, nav: true, margin: 120, loop: true, responsive:{ 0:{ items: 1, margin: 60 }, 600:{ items: 2, margin: 20 }, 767:{ items: 2, margin: 40 }, 991:{ items: 2, margin: 120 }, 1200:{ items: 3 }}};
  public sliderOptions: any = {items: 1, dots: false, nav: true, margin: 120, loop: true, responsive:{ 0:{ items: 1, margin: 60 }, 600:{ items: 1, margin: 20 }, 767:{ items: 1, margin: 40 }, 991:{ items: 1, margin: 120 }, 1200:{ items: 1 }}};

  arParceiros = [
    {
      alt: "J & L Contabilidade",
      url: "/assets/images/jlcontabilidade.png"
    },
    {
      alt: "Exime Contabilidade",
      url: "/assets/images/eximecontabilidade.png"
    }
  ]

  arSolucoes = [
    {
      titulo: "e-CPF",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",
      link: "/solucoes/e-cpf",
      icone: "far fa-credit-card"
    },
    {
      titulo: "e-CNPJ",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",
      link: "/solucoes/e-cnpj",
      icone: "far fa-credit-card"
    },
    {
      titulo: "Mídias / Hardwares",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",
      link: "/solucoes/midias-hardware",
      icone: "far fa-hdd"
    }
  ]

  constructor(
    private title: Title,
    public HttpService: HttpService,
    public GlobalsService: GlobalsService,
    public StorageService: StorageService,
    public ConnectService: ConnectService,
    private snotifyService: SnotifyService
  ) { }

  ngOnInit() {
    $(window).load(function() {
      $(".loader").fadeOut("slow", function(){
      $(".loaders").delay(300).fadeOut("slow");
      });
    });
  }

  enviarEmail(form) {
    console.log(form.value);
    const successAction = Observable.create(observer => {
      
      observer.next({
        body: 'Enviando Mensagem.....',
      });
      this.HttpService.JSON_POST('/send/mail', form.value, true, false)
      .then(
        (res) => {
          console.log(res.json());
          setTimeout(() => {
            observer.next({
              title: 'Obrigado',
              body: 'Em breve entraremos em contato!!',
              config: {
                closeOnClick: true,
                timeout: 3000,
                showProgressBar: true
              }
            });
            observer.complete();
          }, 3000);
          form.reset();
        },
        (error) => {
          console.log(error);
          //this.AlertService.alertError(JSON.parse(error._body));
        }
      )
    });
    this.snotifyService.async('Sucesso!', successAction);
  }

}
