import { ModelAbstract } from './model-abstract';
import { RankerModel } from './ranker.model';
import { ScorerModel } from './scorer.model';

export class MetaModel extends ModelAbstract<MetaModel>{
    rank: number;
    scorer: ScorerModel;
    filter?: any;
    boosters: string[];
    ranker: RankerModel;
}