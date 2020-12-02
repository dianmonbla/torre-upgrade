import { Component } from '@angular/core';

// Custom services
import { NUMBER_OF_PAGE, SIZE_OF_DOCUMENTS_PER_PAGE } from 'src/app/shared/services/torre-api.service';

// Custom interfaces
import { MenuOptionInterface } from '../../../shared/interfaces/menu-option.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menu: MenuOptionInterface[] = [{
    name: "OPPORTUNITIES",
    link: "/jobs",
    queryParams: {
      pageNumber: NUMBER_OF_PAGE,
      size: SIZE_OF_DOCUMENTS_PER_PAGE
    }
  }, {
    name: "PEOPLE",
    link: "/people",
    queryParams: {
      pageNumber: NUMBER_OF_PAGE,
      size: SIZE_OF_DOCUMENTS_PER_PAGE
    }
  }]
}
