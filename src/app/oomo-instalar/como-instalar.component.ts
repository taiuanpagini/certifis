import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GlobalsService } from 'src/app/providers/globals';

declare var $:any;
@Component({
  selector: 'app-como-instalar',
  templateUrl: './como-instalar.component.html',
  styleUrls: ['./como-instalar.component.scss']
})
export class ComoInstalarComponent implements OnInit {

  arSolucoes = [
    {
      id: 1,
      nome: "TOKEN SAFRAN MORPHO",
      drivers: [
        {
          nome: "Driver Safran Morpho (32 Bits)",
          especificacao: "Driver para sistemas de 32 Bits (Windows Xp, Vista, 7 e 8)"
        },
        {
          nome: "Driver Safran Morpho (64 Bits)",
          especificacao: "Driver para sistemas de 32 Bits (Windows Xp, Vista, 7 e 8)"
        }
      ]
    },
    {
      id: 2,
      nome: "ETOKEN SAFENET",
      drivers: [
        {
          nome: "SafeNet Authentication Client 8.2 (32 Bits)",
          especificacao: "Driver para Microsoft Windows de 32 bits (XP, 2003, 2008, Vista, 7 e 8)"
        },
        {
          nome: "SafeNet Authentication Client 8.2 (64 Bits)",
          especificacao: "Driver para Microsoft Windows de 32 bits (XP, 2003, 2008, Vista, 7 e 8)"
        },
        {
          nome: "SafeNet Authentication Client 8.1",
          especificacao: "Driver para Microsoft Windows de 32 e 64 bits (XP, 2003, 2008, Vista, Seven)"
        },
        {
          nome: "Mac OS X Snow Leopard e Lion",
          especificacao: "Mac OS X Snow Leopard e Lion"
        },
        {
          nome: "SafeNet Authentication Client 8.2 (Mac OS)",
          especificacao: "Driver para Mac OS"
        }
      ]
    },
    {
      id: 3,
      nome: "ETOKEN GD STARSIGN",
      drivers: [
        {
          nome: "GD Starsign - GD Burti (32 Bits)",
          especificacao: "Driver para Microsoft Windows de 32 bits (XP, 2003, 2008, Vista, Seven)"
        },
        {
          nome: "GD Starsign - GD Burti (64 Bits)",
          especificacao: "Driver para Microsoft Windows de 64 bits (XP, 2003, 2008, Vista, Seven)"
        }
      ]
    },
    {
      id: 4,
      nome: "LEITORA OMNIKEY 3021",
      drivers: [
        {
          nome: "Windows 32 bits (XP, 2003, 2008, Vista, Seven)",
          especificacao: "Driver para Microsoft Windows de 32 bits (XP, 2003, 2008, Vista, Seven)"
        },
        {
          nome: "Windows 64 bits (XP, 2003, 2008, Vista, Seven)",
          especificacao: "Driver para Microsoft Windows de 32 bits (XP, 2003, 2008, Vista, Seven)"
        },
        {
          nome: "SafeNet Authentication Client 8.1",
          especificacao: "Mac OS X Snow Leopard"
        }
      ]
    },
    {
      id: 5,
      nome: "LEITORA NONUS",
      drivers: [
        {
          nome: "Windows 8, Windows 7, Vista, XP, 2008, 2003 (32 bits)",
          especificacao: "Driver para Microsoft Windows de 32 bits (XP, 2003, 2008, Vista, Seven, 8)"
        },
        {
          nome: "Windows 8, Windows 7, Vista, XP, 2008, 2003 (64 bits)",
          especificacao: "Driver para Microsoft Windows de 32 bits (XP, 2003, 2008, Vista, Seven, 8)"
        },
        {
          nome: "Linux 32/64 bits",
          especificacao: "Driver para Linux 32/64 bits"
        },
        {
          nome: "MAC OSX (10.5/10.6/10.7)",
          especificacao: "Driver para MAC OS X (10.5/10.6/10.7)"
        }
      ]
    },
    {
      id: 6,
      nome: "CARTÃO SAFESIGN STANDARD",
      drivers: [
        {
          nome: "Safesign Standard 3.0.93 (32 Bits)",
          especificacao: "Driver do Cartão modelo novo para sistemas de 32 Bits (Windows Xp, Vista, 7 e 8)"
        },
        {
          nome: "Safesign Standard 3.0.93 (64 Bits)",
          especificacao: "Driver do Cartão modelo novo para sistemas de 32 Bits (Windows Xp, Vista, 7 e 8)"
        }
      ]
    },
    {
      id: 7,
      nome: "TEAMVIEWER",
      drivers: [
        {
          nome: "All-In-One: TeamViewer versão completa ( Windows )"
        },
        {
          nome: "All-In-One: TeamViewer versão completa ( Versão Mac )"
        },
        {
          nome: "All-In-One: TeamViewer versão completa ( Versão Linux )"
        }
      ]
    },
    {
      id: 8,
      nome: "AWP MANAGER",
      drivers: [
        {
          nome: "Windows (XP, 2003, 2008, Vista, Seven)",
          especificacao: "Driver para Microsoft Windows x86 (XP, 2003, 2008, Vista, Seven)"
        },
        {
          nome: "Windows (XP, 2003, 2008, Vista, Seven)",
          especificacao: "Driver para Microsoft Windows x86 (XP, 2003, 2008, Vista, Seven)"
        }
      ]
    }
  ]

  idSolucao: any;

  constructor(
    private title: Title,
    private GlobalsService: GlobalsService
    ) { }

  ngOnInit() {
    this.title.setTitle('Certifis Certificação Digital - Como instalar os drivers');
    $(".loader").fadeOut("slow");
    $(".loaders").delay(300).fadeOut("slow");
    this.idSolucao = 1;
    console.log(this.arSolucoes);
  }

  getSolucao(id) {
    this.idSolucao = this.arSolucoes[id].id
  }

}
