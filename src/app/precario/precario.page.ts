import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-precario',
  templateUrl: './precario.page.html',
  styleUrls: ['./precario.page.scss'],
})
export class PrecarioPage  {
  private dataFilmes: any;
  constructor(private router: Router) { 
    
    this.dataFilmes = {
      "jumanji": {
          "id": "1",
          "title": "Jumanji",
          "imdb_rating": "7.0",
          "release_year": "1995",
          "img": "jumanji.jpg"
        },
  }

  //ngOnInit() {
  //}
  

}
public verDetalhes (precokey: string) {
  let infopreco: NavigationExtras;
  infopreco = {
    state: {
      dadosHotel: this.dataFilmes[precokey]
    }
  }
  // Utilização de Extras State (novo desde o Angular 7.2)
  this.router.navigate(['preco-por-obj'], infopreco);
}

}
