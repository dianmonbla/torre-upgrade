import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom modules
import { BioDetailRoutingModule } from './bio-detail-routing.module';

// Custom components
import { BioDetailComponent } from './bio-detail.component';

// Custom directives
import { DirectivesModule } from '../../../shared/directives/directives.module';

@NgModule({
  declarations: [BioDetailComponent],
  imports: [
    CommonModule,
    DirectivesModule,
    BioDetailRoutingModule
  ],
  exports: [
    BioDetailComponent
  ]
})
export class BioDetailModule { }