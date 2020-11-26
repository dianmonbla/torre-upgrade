import { ModelAbstract } from './model-abstract';
import { DataModel } from './data.model';

export class CompensationModel extends ModelAbstract<CompensationModel>{
    data: DataModel;
    visible: boolean;

    setData(data: CompensationModel): void {
        super.setData(data);

        if (data.data) {
            let _data: DataModel = new DataModel();
            _data.setData(data.data);
            this.data = _data
        }
    }
}