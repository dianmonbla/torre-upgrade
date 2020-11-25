import { ModelAbstract } from './model-abstract';

export class InterestModel extends ModelAbstract<InterestModel>{
    id: string;
    code: number;
    name: string;
    media: any[];
    created: Date;
}