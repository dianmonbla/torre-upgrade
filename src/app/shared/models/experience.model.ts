import { MediumModel } from './medium.model';
import { ModelAbstract } from './model-abstract';
import { OrganizationModel } from './organization.model';

export class ExperienceModel extends ModelAbstract<ExperienceModel>{
    id: string;
    category: string;
    name: string;
    organizations: OrganizationModel[];
    responsibilities: any[];
    highlighted: boolean;
    weight: number;
    verifications: number;
    recommendations: number;
    media: MediumModel[];
    rank: number;
    fromYear: string;
    additionalInfo: string;
    fromMonth: string;
    toMonth: string;
    toYear: string;
}