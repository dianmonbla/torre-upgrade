import { ModelAbstract } from './model-abstract';

export class AwardModel extends ModelAbstract<AwardModel>{
    id: string;
    category: string;
    name: string;
    organizations: any[];
    responsibilities: any[];
    highlighted: boolean;
    weight: number;
    verifications: number;
    recommendations: number;
    media: any[];
    rank: number;
}