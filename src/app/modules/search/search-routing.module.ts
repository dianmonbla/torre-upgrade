import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Custom services
import { NUMBER_OF_PAGE, PAGE_NUMBER_KEY, SIZE_OF_DOCUMENTS_PER_PAGE, SIZE_OF_DOCUMENTS_PER_PAGE_KEY } from 'src/app/shared/services/torre-api.service';

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
    path: '**', redirectTo: `/jobs?${PAGE_NUMBER_KEY}=${NUMBER_OF_PAGE}&${SIZE_OF_DOCUMENTS_PER_PAGE_KEY}=${SIZE_OF_DOCUMENTS_PER_PAGE}`
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
