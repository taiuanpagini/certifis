import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GlobalsService } from 'src/app/providers/globals';

declare var $:any;
@Component({
  selector: 'app-e-cnpj',
  templateUrl: './e-cnpj.component.html',
  styleUrls: ['./e-cnpj.component.scss']
})
export class ECnpjComponent implements OnInit {

  arSolucoes = [
    {
      id: 0,
      tipo: "e-CNPJ",
      nome: "A1 | Arquivo",
      validade: "1",
      valor: "235,00",
      parcela: "10",
      valorParcela: "23,50"
    },
    {
      id: 1,
      tipo: "e-CNPJ",
      nome: "A2 | Cartão",
      validade: "2",
      valor: "295,00",
      parcela: "10",
      valorParcela: "29,50"
    },
    {
      id: 2,
      tipo: "e-CNPJ",
      nome: "A2 | Token",
      validade: "2",
      valor: "429,00",
      parcela: "10",
      valorParcela: "42,90"
    },
    {
      id: 3,
      tipo: "e-CNPJ",
      nome: "A3 | Cartão",
      validade: "3",
      valor: "335,00",
      parcela: "10",
      valorParcela: "33,50"
    },
    {
      id: 4,
      tipo: "e-CNPJ",
      nome: "A3 | Token",
      validade: "3",
      valor: "509,00",
      parcela: "10",
      valorParcela: "50,90"
    }
  ]

  idSolucao: any;

  constructor(
    private title: Title,
    private GlobalsService: GlobalsService
    ) { }

  ngOnInit() {
    this.title.setTitle('Certifis Certificação Digital - Conheça nossas soluções');
    $(".loader").fadeOut("slow");
    $(".loaders").delay(300).fadeOut("slow");
    this.idSolucao = 0;
  }

  getSolucao(id) {
    this.idSolucao = this.arSolucoes[id].id
  }

}
