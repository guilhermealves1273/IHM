import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-minhasestampagens',
  templateUrl: './minhasestampagens.page.html',
  styleUrls: ['./minhasestampagens.page.scss'],
})
export class MinhasestampagensPage  {
  private dataEstamp: any;
  constructor(private router: Router) {
    this.dataEstamp= {
    "tshirt": {
      "id": "1",
      "title": "T-shirt",
      "Preco": "10",
      "Tamanho": " Tamanho: S",
      "img": "tshirt.png"
    },
    "capa": {
      "id": "2",
      "title": "Capa",
      "Preco": "5",
      "Tamanho": "Modelo: Xiaomi Mi A2",
      "img": "cao1.png"
    }
   }

 
}

  public verDetalhe (filmekey: string) {
    let infoDeEstamp: NavigationExtras;
    infoDeEstamp = {
      state: {
        dadosEstamp: this.dataEstamp[filmekey]
      }
    }
    // Utilização de Extras State (novo desde o Angular 7.2)
    this.router.navigate(['tabs/preco-por-obj'], infoDeEstamp);
  }


}
