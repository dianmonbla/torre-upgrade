import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./modules/search/search.module').then(m => m.SearchModule)
}, {
  path: '**',
  loadChildren: () => import('./modules/search/search.module').then(m => m.SearchModule)
}];

@NgModule({
  imports: [
    QuicklinkModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: QuicklinkStrategy,
      initialNavigation: 'enabled'
    })
  ],
  exports: [
    RouterModule,
    QuicklinkModule
  ]
})
export class AppRoutingModule { }
