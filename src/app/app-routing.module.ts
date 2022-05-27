import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'compra1',
    loadChildren: () => import('./compra1/compra1.module').then(m => m.Compra1PageModule)
  },
  {
    path: 'precario',
    loadChildren: () => import('./precario/precario.module').then(m => m.PrecarioPageModule)
  },  {
    path: 'preco-por-obj',
    loadChildren: () => import('./preco-por-obj/preco-por-obj.module').then( m => m.PrecoPorObjPageModule)
  },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
