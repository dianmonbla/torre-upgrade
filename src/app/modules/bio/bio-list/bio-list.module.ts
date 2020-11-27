import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling'

// Custom modules
import { BioListRoutingModule } from './bio-list-routing.module';

// Custom components
import { BioListComponent } from './bio-list.component';

// Custom pipes
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  declarations: [BioListComponent],
  imports: [
    CommonModule,
    PipesModule,
    BioListRoutingModule,
    ScrollingModule
  ],
  exports: [
    BioListComponent
  ]
})
export class BioListModule { }