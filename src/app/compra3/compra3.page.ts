import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-compra3',
  templateUrl: './compra3.page.html',
  styleUrls: ['./compra3.page.scss'],
})
export class Compra3Page implements OnInit {

  constructor(public toast: ToastController) { }



  async openToast() {
    const toast = await this.toast.create({
      message: 'Compra realizada com sucesso',
      duration: 2000,
      color: "success",

    });
    toast.present();
  }

  ngOnInit() {
  }

}
