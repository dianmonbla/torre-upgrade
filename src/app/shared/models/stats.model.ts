import { ModelAbstract } from './model-abstract';

export class StatModel extends ModelAbstract<StatModel>{
    strengths: number;
    awards: number;
    interests: number;
    jobs: number;
    projects: number;
}