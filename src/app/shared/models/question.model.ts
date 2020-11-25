import { ModelAbstract } from './model-abstract';

export class QuestionModel extends ModelAbstract<QuestionModel>{
    id: string;
    text: string;
    date: Date;
}