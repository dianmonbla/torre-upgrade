import { ModelAbstract } from './model-abstract';

export class JobModel extends ModelAbstract<JobModel>{
    id: string;
    category: string;
    name: string;
    organizations: OrganizationModel[];
    responsibilities: any[];
    fromYear: string;
    additionalInfo: string;
    highlighted: boolean;
    weight: number;
    verifications: number;
    recommendations: number;
    media: any[];
    rank: number;
    toYear: string;
}