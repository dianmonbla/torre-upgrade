import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Custom components
import { BioDetailComponent } from './bio-detail.component';

const routes: Routes = [{
  path: ':username',
  component: BioDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BioDetailRoutingModule { }
