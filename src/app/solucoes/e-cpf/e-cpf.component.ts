import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GlobalsService } from 'src/app/providers/globals';

declare var $:any;
@Component({
  selector: 'app-e-cpf',
  templateUrl: './e-cpf.component.html',
  styleUrls: ['./e-cpf.component.scss']
})
export class ECpfComponent implements OnInit {

  arSolucoes = [
    {
      id: 0,
      tipo: "e-CPF",
      nome: "A1 | Arquivo",
      validade: "1",
      valor: "120,00",
      parcela: "10",
      valorParcela: "12,00"
    },
    {
      id: 1,
      tipo: "e-CPF",
      nome: "A2 | Cartão",
      validade: "2",
      valor: "200,00",
      parcela: "10",
      valorParcela: "20,00"
    },
    {
      id: 2,
      tipo: "e-CPF",
      nome: "A2 | Token",
      validade: "2",
      valor: "365,00",
      parcela: "10",
      valorParcela: "36,50"
    },
    {
      id: 3,
      tipo: "e-CPF",
      nome: "A3 | Cartão",
      validade: "3",
      valor: "235,00",
      parcela: "10",
      valorParcela: "23,50"
    },
    {
      id: 4,
      tipo: "e-CPF",
      nome: "A3 | Token",
      validade: "3",
      valor: "409,00",
      parcela: "10",
      valorParcela: "40,90"
    }
  ]

  idSolucao: any;

  constructor(
    private title: Title,
    private GlobalsService: GlobalsService
    ) { }

  ngOnInit() {
    this.title.setTitle('Certifis Certificação Digital - Conheça nossas e-cpf');
    $(".loader").fadeOut("slow");
    $(".loaders").delay(300).fadeOut("slow");
    this.idSolucao = 0;
  }

  getSolucao(id) {
    this.idSolucao = this.arSolucoes[id].id
  }

}
