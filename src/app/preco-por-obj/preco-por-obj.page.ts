import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preco-por-obj',
  templateUrl: './preco-por-obj.page.html',
  styleUrls: ['./preco-por-obj.page.scss'],
})
export class PrecoPorObjPage implements OnInit {

  public dataPreco: any;

  constructor() { }

  ngOnInit() {
    fetch('./assets/data/preco.json')
    .then(res => res.json())
    .then(json => {
      this.dataPreco = json;
      // console.log(this.dataMovies);
    })
  }

}
