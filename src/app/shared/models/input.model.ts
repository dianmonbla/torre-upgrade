import { ModelAbstract } from './model-abstract';
import { OpportunityModel } from './opportunity.model';
import { PersonModel } from './person.model';

export class InputModel extends ModelAbstract<InputModel>{
    criteria?: any;
    opportunity: OpportunityModel;
    person: PersonModel;
}