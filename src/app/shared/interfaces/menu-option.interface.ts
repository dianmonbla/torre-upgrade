import { Params } from '@angular/router';

export interface MenuOptionInterface {
    name: string
    link: string,
    queryParams?: Params
}