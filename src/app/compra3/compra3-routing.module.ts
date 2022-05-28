import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Compra3Page } from './compra3.page';

const routes: Routes = [
  {
    path: '',
    component: Compra3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Compra3PageRoutingModule {}
