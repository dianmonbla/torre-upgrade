import { ModelAbstract } from './model-abstract';
import { MediumModel } from './medium.model';
import { OrganizationModel } from './organization.model';

export class ProjectModel extends ModelAbstract<ProjectModel>{
    id: string;
    category: string;
    name: string;
    organizations: OrganizationModel[];
    responsibilities: any[];
    fromMonth: string;
    fromYear: string;
    toMonth: string;
    toYear: string;
    highlighted: boolean;
    weight: number;
    verifications: number;
    recommendations: number;
    media: MediumModel[];
    rank: number;
}