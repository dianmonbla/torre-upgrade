import { ModelAbstract } from './model-abstract';
import { AndModel } from './and.model';

export class RankerModel extends ModelAbstract<RankerModel>{
    type: string;
    rank: number;
    score?: any;
    and: AndModel[];

    setData(data: RankerModel): void {
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