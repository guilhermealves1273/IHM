import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Compra2Page } from './compra2.page';

const routes: Routes = [
  {
    path: '',
    component: Compra2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Compra2PageRoutingModule {}
