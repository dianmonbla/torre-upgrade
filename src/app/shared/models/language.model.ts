import { ModelAbstract } from './model-abstract';

export class LanguageModel extends ModelAbstract<LanguageModel>{
    code: string;
    language: string;
    fluency: string;
}