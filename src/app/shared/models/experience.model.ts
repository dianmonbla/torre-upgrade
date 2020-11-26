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

    setData(data: ExperienceModel): void {
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