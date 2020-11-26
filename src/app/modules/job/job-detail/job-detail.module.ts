import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom modules
import { JobDetailRoutingModule } from './job-detail-routing.module';

// Custom components
import { JobDetailComponent } from './job-detail.component';

// Custom directives
import { DirectivesModule } from '../../../shared/directives/directives.module';

@NgModule({
  declarations: [JobDetailComponent],
  imports: [
    CommonModule,
    DirectivesModule,
    JobDetailRoutingModule
  ],
  exports: [
    JobDetailComponent
  ]
})
export class JobDetailModule { }