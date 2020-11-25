import { ModelAbstract } from './model-abstract';

export class LinkModel extends ModelAbstract<LinkModel>{
    id: string;
    name: string;
    address: string;
}