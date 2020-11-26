import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom modules
import { SearchRoutingModule } from './search-routing.module';
import { SearchFilterModule } from './search-filter/search-filter.module';

// Custom pipes
import { SearchComponent } from './search.component';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SearchFilterModule
  ]
})
export class SearchModule { }
