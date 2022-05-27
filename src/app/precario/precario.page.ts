import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-precario',
  templateUrl: './precario.page.html',
  styleUrls: ['./precario.page.scss'],
})
export class PrecarioPage  {
  public dataPreco: any;
  public dataCanecas: any;
  public dataCapas: any;
  constructor() { }
  
  
  
  ngOnInit() {
    fetch('./assets/data/preco.json')
    .then(res => res.json())
    .then(json => {
      this.dataPreco = json;
    })
    fetch('./assets/data/canecas.json')
    .then(oi => oi.json())
    .then(oi1 => {
      this.dataCanecas = oi1;
     
    })
    fetch('./assets/data/capastele.json')
    .then(res2 => res2.json())
    .then(json2 => {
      this.dataCapas = json2;
     
    })

  }
  /*ngOnInit2() {
    fetch('./assets/data/canecas.json')
    .then(res => res.json())
    .then(json => {
      this.dataCanecas = json;
     
    })

  }*/

  }


