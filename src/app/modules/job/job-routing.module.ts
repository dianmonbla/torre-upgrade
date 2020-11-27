import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Custom components
import { JobComponent } from './job.component';

const routes: Routes = [{
  path: '',
  component: JobComponent,
  children: [{
    path: ':id',
    loadChildren: () => import('./job-detail/job-detail.module').then(m => m.JobDetailModule)
  },
  {
    path: '**',
    loadChildren: () => import('./job-list/job-list.module').then(m => m.JobListModule)
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
