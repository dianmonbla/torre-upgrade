import { AndModel } from './and.model';
import { ModelAbstract } from './model-abstract';

export class ScorerModel extends ModelAbstract<ScorerModel>{
    type: string;
    score: number;
    and: AndModel[];

    setData(data: ScorerModel): void {
        super.setData(data);

        if (data.and) {
            this.and = data.and.map((_and: AndModel) => {
                let and: AndModel = new AndModel();
                and.setData(_and);
                return and;
            });
        }
    }
}