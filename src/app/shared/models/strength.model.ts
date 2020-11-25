import { ModelAbstract } from './model-abstract';

export class StrengthModel extends ModelAbstract<StrengthModel>{
    id: string;
    code: number;
    name: string;
    weight: number;
    recommendations: number;
    media: any[];
    created: Date;
}