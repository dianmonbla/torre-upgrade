import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Custom components
import { SearchFilterComponent } from './search-filter.component';

@NgModule({
  declarations: [SearchFilterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchFilterComponent
  ]
})
export class SearchFilterModule { }
