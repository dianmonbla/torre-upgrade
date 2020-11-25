import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Custom modules
import { DirectivesModule } from '../../directives/directives.module';

// Custom components
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    DirectivesModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
