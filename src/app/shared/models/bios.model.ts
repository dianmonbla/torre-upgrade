import { AwardModel } from './award.model';
import { ExperienceModel } from './experience.model';
import { InterestModel } from './interest.model';
import { JobModel } from './job.model';
import { LanguageModel } from './language.model';
import { ModelAbstract } from './model-abstract';
import { OpportunityModel } from './opportunity.model';
import { PersonModel } from './person.model';
import { ProjectModel } from './project.model';
import { StatModel } from './stats.model';
import { StrengthModel } from './strength.model';

export class BiosModel extends ModelAbstract<BiosModel>{
    person: PersonModel;
    stats: StatModel;
    strengths: StrengthModel[];
    interests: InterestModel[];
    experiences: ExperienceModel[];
    awards: AwardModel[];
    jobs: JobModel[];
    projects: ProjectModel[];
    publications: any[];
    education: any[];
    opportunities: OpportunityModel[];
    languages: LanguageModel[];
}