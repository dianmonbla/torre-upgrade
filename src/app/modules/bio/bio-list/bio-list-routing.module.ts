import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Custom components
import { BioListComponent } from './bio-list.component';

const routes: Routes = [{
  path: '',
  component: BioListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BioListRoutingModule { }
