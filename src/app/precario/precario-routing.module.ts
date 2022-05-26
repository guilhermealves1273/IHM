import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrecarioPage } from './precario.page';

const routes: Routes = [
  {
    path: '',
    component: PrecarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrecarioPageRoutingModule {}
