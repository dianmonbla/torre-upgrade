import { AndModel } from './and.model';
import { ModelAbstract } from './model-abstract';

export class ScorerModel extends ModelAbstract<ScorerModel>{
    type: string;
    score: number;
    and: AndModel[];
}