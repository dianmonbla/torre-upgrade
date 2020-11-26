import { ModelAbstract } from './model-abstract';
import { OpportunityModel } from './opportunity.model';
import { PersonModel } from './person.model';

export class InputModel extends ModelAbstract<InputModel>{
    criteria?: any;
    opportunity: OpportunityModel;
    person: PersonModel;

    setData(data: InputModel): void {
        super.setData(data);

        if (data.opportunity) {
            let opportunity: OpportunityModel = new OpportunityModel();
            opportunity.setData(data.opportunity);
            this.opportunity = opportunity
        }

        if (data.person) {
            let person: PersonModel = new PersonModel();
            person.setData(data.person);
            this.person = person
        }
    }
}