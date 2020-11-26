import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom modules
import { BioRoutingModule } from './bio-routing.module';

// Custom components
import { BioComponent } from './bio.component';

// Custom pipes
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  declarations: [BioComponent],
  imports: [
    CommonModule,
    PipesModule,
    BioRoutingModule
  ],
  exports: [
    BioComponent
  ]
})
export class BioModule { }