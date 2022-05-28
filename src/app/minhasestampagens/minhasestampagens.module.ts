import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinhasestampagensPageRoutingModule } from './minhasestampagens-routing.module';

import { MinhasestampagensPage } from './minhasestampagens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinhasestampagensPageRoutingModule
  ],
  declarations: [MinhasestampagensPage]
})
export class MinhasestampagensPageModule {}
