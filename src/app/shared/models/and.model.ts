import { ModelAbstract } from './model-abstract';
import { InputModel } from './input.model';

export class AndModel extends ModelAbstract<AndModel>{
    type: string;
    id: string;
    input: InputModel;
    score: number;
    rank: number;
    scorer: string;

    setData(data: AndModel): void {
        super.setData(data);

        if (data.input) {
            let input: InputModel = new InputModel();
            input.setData(data.input);
            this.input = input
        }
    }
}