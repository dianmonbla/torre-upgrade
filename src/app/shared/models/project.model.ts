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

    setData(data: ProjectModel): void {
        super.setData(data);

        if (data.organizations) {
            this.organizations = data.organizations.map((_organization: OrganizationModel) => {
                let organization: OrganizationModel = new OrganizationModel();
                organization.setData(_organization);
                return organization;
            });
        }

        if (data.media) {
            this.media = data.media.map((_medium: MediumModel) => {
                let medium: MediumModel = new MediumModel();
                medium.setData(_medium);
                return medium;
            });
        }
    }
}