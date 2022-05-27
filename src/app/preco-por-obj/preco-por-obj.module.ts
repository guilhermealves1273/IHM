import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrecoPorObjPageRoutingModule } from './preco-por-obj-routing.module';

import { PrecoPorObjPage } from './preco-por-obj.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrecoPorObjPageRoutingModule
  ],
  declarations: [PrecoPorObjPage]
})
export class PrecoPorObjPageModule {}
