import { ModelAbstract } from './model-abstract';

export class SkillModel extends ModelAbstract<SkillModel>{
    name: string;
    experience: string;
    weight: number;
}