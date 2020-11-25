import { ModelAbstract } from './model-abstract';
import { DataModel } from './data.model';

export class CompensationModel extends ModelAbstract<CompensationModel>{
    data: DataModel;
    visible: boolean;
}