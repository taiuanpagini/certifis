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
      id: 1,
      nome: "e-CNPJ A1 | Arquivo",
      validade: "1 ano",
      valor: "189,00",
      parcela: "10",
      valorParcela: "18,90"
    },
    {
      id: 2,
      nome: "e-CNPJ A2 | Cartão",
      validade: "2 anos",
      valor: "295,00",
      parcela: "10",
      valorParcela: "29,50"
    },
    {
      id: 3,
      nome: "e-CNPJ A2 | Token",
      validade: "2 anos",
      valor: "429,00",
      parcela: "10",
      valorParcela: "42,90"
    },
    {
      id: 4,
      nome: "e-CNPJ A3 | Cartão",
      validade: "3 anos",
      valor: "335,00",
      parcela: "10",
      valorParcela: "33,50"
    },
    {
      id: 5,
      nome: "e-CNPJ A3 | Token",
      validade: "3 anos",
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
    this.idSolucao = 1;
  }

  getSolucao(id) {
    this.idSolucao = this.arSolucoes[id].id
  }

}
