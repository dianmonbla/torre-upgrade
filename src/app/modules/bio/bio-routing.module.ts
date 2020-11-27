import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Custom components
import { BioComponent } from './bio.component';

const routes: Routes = [{
  path: '',
  component: BioComponent,
  children:[{
    path: ':username',
    loadChildren: () => import('./bio-detail/bio-detail.module').then(m => m.BioDetailModule),
  }, {
    path: '',
    loadChildren: () => import('./bio-list/bio-list.module').then(m => m.BioListModule),
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BioRoutingModule { }
