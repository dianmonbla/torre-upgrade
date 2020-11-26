import { ModelAbstract } from './model-abstract';
import { FlagModel } from './flag.model';
import { LinkModel } from './link.model';
import { LocationModel } from './location.model';

export class PersonModel extends ModelAbstract<PersonModel>{
    professionalHeadline: string;
    completion: number;
    showPhone: boolean;
    created: Date;
    verified: boolean;
    flags: FlagModel;
    weight: number;
    locale: string;
    subjectId: number;
    hasEmail: boolean;
    name: string;
    links: LinkModel[];
    location: LocationModel;
    theme: string;
    id: string;
    claimant: boolean;
    weightGraph: string;
    publicId: string;
    grammar?: number;

    setData(data: PersonModel): void {
        super.setData(data);

        if (data.flags) {
            let flag: FlagModel = new FlagModel();
            flag.setData(data.flags);
            this.flags = flag;
        }

        if (data.links) {
            this.links = data.links.map((_link: LinkModel) => {
                let link: LinkModel = new LinkModel();
                link.setData(_link);
                return link;
            });
        }

        if (data.location) {
            let location: LocationModel = new LocationModel();
            location.setData(data.location);
            this.location = location;
        }
    }
}