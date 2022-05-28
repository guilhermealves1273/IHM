import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Compra2PageRoutingModule } from './compra2-routing.module';

import { Compra2Page } from './compra2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Compra2PageRoutingModule
  ],
  declarations: [Compra2Page]
})
export class Compra2PageModule {}
