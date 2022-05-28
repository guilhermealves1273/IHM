import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Compra3PageRoutingModule } from './compra3-routing.module';

import { Compra3Page } from './compra3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Compra3PageRoutingModule
  ],
  declarations: [Compra3Page]
})
export class Compra3PageModule {}
