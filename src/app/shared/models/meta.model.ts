import { ModelAbstract } from './model-abstract';
import { RankerModel } from './ranker.model';
import { ScorerModel } from './scorer.model';

export class MetaModel extends ModelAbstract<MetaModel>{
    rank: number;
    scorer: ScorerModel;
    filter?: any;
    boosters: string[];
    ranker: RankerModel;

    setData(data: MetaModel): void {
        super.setData(data);

        if (data.scorer) {
            let scorer: ScorerModel = new ScorerModel();
            scorer.setData(data.scorer);
            this.scorer = scorer;
        }

        if (data.ranker) {
            let ranker: RankerModel = new RankerModel();
            ranker.setData(data.ranker);
            this.ranker = ranker;
        }
    }
}