import { ModelAbstract } from './model-abstract';

export class OrganizationModel extends ModelAbstract<OrganizationModel>{
    id: number;
    name: string;
    picture: string;
}