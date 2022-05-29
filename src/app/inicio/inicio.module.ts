import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [InicioPage]
})
export class InicioPageModule {
  constructor(private orientacao: ScreenOrientation) {
    this.orientacao.lock(this.orientacao.ORIENTATIONS.PORTRAIT);
  }
}
