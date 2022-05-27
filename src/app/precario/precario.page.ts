import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-precario',
  templateUrl: './precario.page.html',
  styleUrls: ['./precario.page.scss'],
})
export class PrecarioPage  {
  private datatshirt: any;
  constructor(private router: Router) { 
    
    this.datatshirt = {
      "tshirt": {
          "id": "1",
          "title": "tshirt",
          "preco": "7.0",
          "img": "tshirt.jpg"
        },
  }

  //ngOnInit() {
  //}
  

}
public verDetalhes (precokey: string) {
  let infopreco: NavigationExtras;
  infopreco = {
    state: {
     datatshirt: this.datatshirt[precokey]
    }
  }
  // Utilização de Extras State (novo desde o Angular 7.2)
  this.router.navigate(['preco-por-obj'], infopreco);
}

}
