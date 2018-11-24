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
      id: 0,
      tipo: "Mídia",
      nome: "Cartão",
      valor: "40,00",
      parcela: "2",
      valorParcela: "20,00",
      imagem: "assets/images/cartao.jpg"
    },
    {
      id: 1,
      tipo: "Hardware",
      nome: "Token",
      valor: "145,00",
      parcela: "10",
      valorParcela: "14,50",
      imagem: "assets/images/token.jpg"
    },
    {
      id: 2,
      tipo: "Hardware",
      nome: "Leitora de Cartão",
      valor: "125,00",
      parcela: "10",
      valorParcela: "12,50",
      imagem: "assets/images/leitora.jpg"
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
