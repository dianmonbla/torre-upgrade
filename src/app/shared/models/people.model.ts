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

    setData(data: PeopleModel): void {
        super.setData(data);

        if (data.context) {
            let context: ContextModel = new ContextModel();
            context.setData(data.context);
            this.context = context;
        }

        if (data._meta) {
            let meta: MetaModel = new MetaModel();
            meta.setData(data._meta);
            this._meta = meta;
        }

        if (data.compensations) {
            this.compensations = Object.keys(data.compensations).reduce((store: { [key: string]: DataModel }, compensationKey: string) => {
                let _data: DataModel = new DataModel();
                _data.setData(data.compensations[compensationKey]);
                store[compensationKey] = _data
                return store;
            }, {})
        }

        if (data.skills) {
            this.skills = data.skills.map((_skill: SkillModel) => {
                let skill: SkillModel = new SkillModel();
                skill.setData(_skill);
                return skill;
            });
        }
    }
}