import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compra1',
  templateUrl: './compra1.page.html',
  styleUrls: ['./compra1.page.scss'],
})
export class Compra1Page implements OnInit {
  resultado:string
  constructor() {
    this.resultado = "0"
   }

  ngOnInit() {
  }

  handleOnChange(event){
    console.log(event.target.value)
  }

}

