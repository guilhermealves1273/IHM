import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'precario',
        loadChildren: () => import('../precario/precario.module').then(m => m.PrecarioPageModule)
      },
      {
        path: 'compra1',
        loadChildren: () => import('../compra1/compra1.module').then(m => m.Compra1PageModule)
      },
      {
        path: 'compra2',
        loadChildren: () => import('../compra2/compra2.module').then(m => m.Compra2PageModule)
      },
      {
        path: 'compra1',
        loadChildren: () => import('../compra1/compra1.module').then(m => m.Compra1PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
