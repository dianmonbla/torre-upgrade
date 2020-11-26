import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Custom components
import { HeaderComponent } from './header.component';

// Custom directives
import { DirectivesModule } from '../../../shared/directives/directives.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    DirectivesModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }