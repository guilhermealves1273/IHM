import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Compra1PageRoutingModule } from './compra1-routing.module';

import { Compra1Page } from './compra1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Compra1PageRoutingModule
  ],
  declarations: [Compra1Page]
})
export class Compra1PageModule {}
