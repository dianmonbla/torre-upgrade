import { ModelAbstract } from './model-abstract';

export class DataModel extends ModelAbstract<DataModel>{
    code: string;
    currency: string;
    minAmount: number;
    maxAmount: number;
    periodicity: string;
    amount: number;
}