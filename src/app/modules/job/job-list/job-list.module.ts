import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling'

// Custom modules
import { JobListRoutingModule } from './job-list-routing.module';

// Custom components
import { JobListComponent } from './job-list.component';

// Custom pipes
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  declarations: [JobListComponent],
  imports: [
    CommonModule,
    PipesModule,
    JobListRoutingModule,
    ScrollingModule
  ],
  exports: [
    JobListComponent
  ]
})
export class JobListModule { }