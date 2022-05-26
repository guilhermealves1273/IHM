import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrecarioPageRoutingModule } from './precario-routing.module';

import { PrecarioPage } from './precario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrecarioPageRoutingModule
  ],
  declarations: [PrecarioPage]
})
export class PrecarioPageModule {}
