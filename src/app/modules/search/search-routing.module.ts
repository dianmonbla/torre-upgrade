import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Custom components
import { SearchComponent } from './search.component';

const routes: Routes = [{
  path: '',
  component: SearchComponent,
  children: [{
    path: 'people',
    loadChildren: () => import('../bio/bio.module').then(m => m.BioModule)
  }, {
    path: 'jobs',
    loadChildren: () => import('../job/job.module').then(m => m.JobModule)
  }, {
    path: '**', redirectTo: '/jobs'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
