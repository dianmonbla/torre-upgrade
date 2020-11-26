import { Component } from '@angular/core';

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
    link: "/jobs"
  }, {
    name: "PEOPLE",
    link: "/people"
  }]
}
