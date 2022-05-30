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
  },
  {
    path: 'preco-por-obj',
    loadChildren: () => import('./preco-por-obj/preco-por-obj.module').then( m => m.PrecoPorObjPageModule)
  },
  {
    path: 'compra2',
    loadChildren: () => import('./compra2/compra2.module').then( m => m.Compra2PageModule)
  },  {
    path: 'minhasestampagens',
    loadChildren: () => import('./minhasestampagens/minhasestampagens.module').then( m => m.MinhasestampagensPageModule)
  },
  {
    path: 'compra3',
    loadChildren: () => import('./compra3/compra3.module').then( m => m.Compra3PageModule)
  },
  {
    path: 'social',
    loadChildren: () => import('./social/social.module').then( m => m.SocialPageModule)
  },

 


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
