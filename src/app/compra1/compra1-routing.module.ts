import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Compra1Page } from './compra1.page';

const routes: Routes = [
  {
    path: '',
    component: Compra1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Compra1PageRoutingModule {}
