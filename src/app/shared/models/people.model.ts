import { ModelAbstract } from './model-abstract';
import { ContextModel } from './context.model';
import { DataModel } from './data.model';
import { MetaModel } from './meta.model';
import { SkillModel } from './skill.model';

export class PeopleModel extends ModelAbstract<PeopleModel>{
    context: ContextModel;
    _meta: MetaModel;
    compensations: { [key: string]: DataModel };
    locationName: string;
    name: string;
    openTo: string[];
    picture: string;
    professionalHeadline: string;
    remoter: boolean;
    skills: SkillModel[];
    subjectId: string;
    username: string;
    verified: boolean;
    weight: number;
}