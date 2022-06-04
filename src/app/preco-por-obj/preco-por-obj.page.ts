import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-preco-por-obj',
  templateUrl: './preco-por-obj.page.html',
  styleUrls: ['./preco-por-obj.page.scss'],
})
export class PrecoPorObjPage implements OnInit {

  public infoEstamp: any;
  

  constructor(private router: Router, private rotaAtiva: ActivatedRoute) {
    this.rotaAtiva.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.infoEstamp = this.router.getCurrentNavigation().extras.state. dadosEstamp;
        console.log(this.infoEstamp);
      }
    })
   }
   

  ngOnInit() {
   
    }

  }


