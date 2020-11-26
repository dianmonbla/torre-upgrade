import { ModelAbstract } from './model-abstract';
import { OrganizationModel } from './organization.model';

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

    setData(data: JobModel): void {
        super.setData(data);

        if (data.organizations) {
            this.organizations = data.organizations.map((_organization: OrganizationModel) => {
                let organization: OrganizationModel = new OrganizationModel();
                organization.setData(_organization);
                return organization;
            });
        }
    }
}