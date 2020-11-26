import { ModelAbstract } from './model-abstract';

export class MemberModel extends ModelAbstract<MemberModel>{
    subjectId: string;
    name: string;
    username: string;
    professionalHeadline: string;
    picture: string;
    member: boolean;
    manager: boolean;
    poster: boolean;
    weight: number;
}