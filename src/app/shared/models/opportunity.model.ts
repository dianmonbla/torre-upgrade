import { ModelAbstract } from './model-abstract';
import { DatumModel } from './datum.model';
import { OrganizationModel } from './organization.model';
import { CompensationModel } from './compensation.model';
import { SkillModel } from './skill.model';
import { MemberModel } from './member.model';
import { QuestionModel } from './question.model';
import { ContextModel } from './context.model';
import { MetaModel } from './meta.model';

export class OpportunityModel extends ModelAbstract<OpportunityModel>{
    id: string;
    interest: string;
    field: string;
    data: DatumModel[];
    completion: number;
    objective: string;
    type: string;
    organizations: OrganizationModel[];
    locations: string[];
    remote: boolean;
    external: boolean;
    deadline: Date;
    status: string;
    compensation: CompensationModel;
    skills: SkillModel[];
    members: MemberModel[];
    questions: QuestionModel[];
    context: ContextModel;
    _meta: MetaModel;
}