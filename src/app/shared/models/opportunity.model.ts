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

    setData(data: OpportunityModel): void {
        super.setData(data);

        // if (data.data) {
        //     this.data = data.data.map((_datum: DatumModel) => {
        //         let datum: DatumModel = new DatumModel();
        //         datum.setData(_datum);
        //         return datum;
        //     });
        // }

        if (data.organizations) {
            this.organizations = data.organizations.map((_organization: OrganizationModel) => {
                let organization: OrganizationModel = new OrganizationModel();
                organization.setData(_organization);
                return organization;
            });
        }

        if (data.deadline)
            this.deadline = new Date(data.deadline);

        if (data.compensation) {
            let compensation: CompensationModel = new CompensationModel();
            compensation.setData(data.compensation);
            this.compensation = compensation;
        }

        if (data.skills) {
            this.skills = data.skills.map((_skill: SkillModel) => {
                let skill: SkillModel = new SkillModel();
                skill.setData(_skill);
                return skill;
            });
        }

        if (data.members) {
            this.members = data.members.map((_member: MemberModel) => {
                let member: MemberModel = new MemberModel();
                member.setData(_member);
                return member;
            });
        }

        if (data.questions) {
            this.questions = data.questions.map((_question: QuestionModel) => {
                let question: QuestionModel = new QuestionModel();
                question.setData(_question);
                return question;
            });
        }

        if (data.context) {
            let context: ContextModel = new ContextModel();
            context.setData(data.context);
            this.context = context
        }

        if (data._meta) {
            let meta: MetaModel = new MetaModel();
            meta.setData(data._meta);
            this._meta = meta
        }
    }
}