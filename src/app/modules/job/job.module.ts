import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling'

// Custom modules
import { JobRoutingModule } from './job-routing.module';

// Custom components
import { JobComponent } from './job.component';

// Custom pipes
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  declarations: [JobComponent],
  imports: [
    CommonModule,
    PipesModule,
    JobRoutingModule,
    ScrollingModule
  ],
  exports: [
    JobComponent
  ]
})
export class JobModule { }