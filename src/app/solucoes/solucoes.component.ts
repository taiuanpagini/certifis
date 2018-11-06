import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

declare var $: any;
@Component({
  selector: 'app-solucoes',
  templateUrl: './solucoes.component.html',
  styleUrls: ['./solucoes.component.scss']
})
export class SolucoesComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Certifis Certificação Digital - Conheça a Empresa');
    $(".loader").fadeOut("slow");
    $(".loaders").delay(300).fadeOut("slow");
  }

}
