import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrecoPorObjPage } from './preco-por-obj.page';

const routes: Routes = [
  {
    path: '',
    component: PrecoPorObjPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrecoPorObjPageRoutingModule {}
