import { ModelAbstract } from './model-abstract';
import { AndModel } from './and.model';

export class RankerModel extends ModelAbstract<RankerModel>{
    type: string;
    rank: number;
    score?: any;
    and: AndModel[];
}