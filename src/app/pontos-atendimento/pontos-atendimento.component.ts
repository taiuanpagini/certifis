import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

declare var $: any;

@Component({
  selector: 'app-pontos-atendimento',
  templateUrl: './pontos-atendimento.component.html',
  styleUrls: ['./pontos-atendimento.component.scss']
})
export class PontosAtendimentoComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Certifis Certificação Digital - Conheça a Empresa');
    $(".loader").fadeOut("slow");
    $(".loaders").delay(300).fadeOut("slow");
  }

}
