import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GlobalsService } from 'src/app/providers/globals';

declare var $:any;
@Component({
  selector: 'app-midias',
  templateUrl: './midias.component.html',
  styleUrls: ['./midias.component.scss']
})
export class MidiasComponent implements OnInit {

  arSolucoes = [
    {
      id: 1,
      nome: "e-CPF A1 | Arquivo",
      validade: "1 ano",
      valor: "120,00",
      parcela: "10",
      valorParcela: "12,00"
    },
    {
      id: 2,
      nome: "e-CPF A2 | Cartão",
      validade: "2 anos",
      valor: "200,00",
      parcela: "10",
      valorParcela: "20,00"
    },
    {
      id: 3,
      nome: "e-CPF A2 | Token",
      validade: "2 anos",
      valor: "365,00",
      parcela: "10",
      valorParcela: "36,50"
    },
    {
      id: 4,
      nome: "e-CPF A3 | Cartão",
      validade: "3 anos",
      valor: "235,00",
      parcela: "10",
      valorParcela: "23,50"
    },
    {
      id: 5,
      nome: "e-CPF A3 | Token",
      validade: "3 anos",
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
    this.idSolucao = 1;
  }

  getSolucao(id) {
    this.idSolucao = this.arSolucoes[id].id
  }

}
