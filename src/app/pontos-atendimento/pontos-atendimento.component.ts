import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

declare var $: any;

@Component({
  selector: 'app-pontos-atendimento',
  templateUrl: './pontos-atendimento.component.html',
  styleUrls: ['./pontos-atendimento.component.scss']
})
export class PontosAtendimentoComponent implements OnInit {

  arPontosAtendimento = [
    {
      local: "Joinville -SC",
      endereco: " Rua Ponte Serrada, 566, Sala 02, Comasa, 89.228-271, Joinville -SC",
      contatos: "(41) 99334.9887 | (41) 99875.9809",
      horarios: [
        {
          nome: "Segunda a Sábado:",
          horario: "6h às 22h"
        },
        {
          nome: "Domingos e Feriados:",
          horario: "Fechado"
        }
      ],
      servicos: [
        {
          nome: "e-CPF"
        },
        {
          nome: "e-CNPJ"
        }
      ],
      imagens: [
        {
          url: "assets/images/img-sobre.png"
        },
        {
          url: "assets/images/img-sobre.png"
        },
        {
          url: "assets/images/img-sobre.png"
        },
        {
          url: "assets/images/img-sobre.png"
        }
      ]
    },
    {
      local: "Canoas - RS",
      endereco: " Rua Ponte Serrada, 566, Sala 02, Comasa, 89.228-271, Joinville -SC",
      contatos: "(41) 99334.9887 | (41) 99875.9809",
      horarios: [
        {
          nome: "Segunda a Quinta:",
          horario: "6h às 22h"
        },
        {
          nome: "Sexta:",
          horario: "6h às 18h"
        },
        {
          nome: "Domingos e Feriados:",
          horario: "Fechado"
        }
      ],
      servicos: [
        {
          nome: "e-CPF"
        },
        {
          nome: "e-CNPJ"
        }
      ],
      imagens: [
        {
          alt: "Descrição Teste",
          url: "assets/images/img-sobre.png"
        },
        {
          alt: "Descrição Teste",
          url: "assets/images/img-sobre.png"
        },
        {
          alt: "Descrição Teste",
          url: "assets/images/img-sobre.png"
        },
        {
          alt: "Descrição Teste",
          url: "assets/images/img-sobre.png"
        }
      ]
    }
  ]

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Certifis Certificação Digital - Conheça a Empresa');
    $(".loader").fadeOut("slow");
    $(".loaders").delay(300).fadeOut("slow");
  }

}
