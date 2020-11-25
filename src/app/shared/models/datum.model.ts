import { ModelAbstract } from './model-abstract';

export class DatumModel extends ModelAbstract<DatumModel>{
    code: number;
    locale: string;
    name: string;
}