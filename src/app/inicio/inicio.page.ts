import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public toast: ToastController) { }

  async openToast(){
    const toast = await this.toast.create({
      message:'Sessão Iniciada',
      duration: 2000,
      color: "success"
    });
    toast.present();
  }

  ngOnInit() {
  }

}
