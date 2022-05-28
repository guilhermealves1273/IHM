import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinhasestampagensPage } from './minhasestampagens.page';

const routes: Routes = [
  {
    path: '',
    component: MinhasestampagensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinhasestampagensPageRoutingModule {}
