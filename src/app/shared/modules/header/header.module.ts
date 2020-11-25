import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Custom modules
import { DirectivesModule } from '../../directives/directives.module';

// Custom components
import { HeaderComponent } from './header.component';

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