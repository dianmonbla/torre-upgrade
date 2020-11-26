import { ModelAbstract } from './model-abstract';

export class QuestionModel extends ModelAbstract<QuestionModel>{
    id: string;
    text: string;
    date: Date;

    setData(data: QuestionModel): void {
        super.setData(data);

        if (data.date)
            this.date = new Date(data.date);
    }
}