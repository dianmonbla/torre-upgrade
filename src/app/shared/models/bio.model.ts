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

export class BioModel extends ModelAbstract<BioModel>{
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

    setData(data: BioModel): void {
        super.setData(data);

        if (data.person) {
            let person: PersonModel = new PersonModel();
            person.setData(data.person);
            this.person = person
        }

        if (data.stats) {
            let stat: StatModel = new StatModel();
            stat.setData(data.stats);
            this.stats = stat
        }

        if (data.strengths) {
            this.strengths = data.strengths.map((_strength: StrengthModel) => {
                let strength: StrengthModel = new StrengthModel();
                strength.setData(_strength);
                return strength;
            });
        }

        if (data.interests) {
            this.interests = data.interests.map((_interest: InterestModel) => {
                let interest: InterestModel = new InterestModel();
                interest.setData(_interest);
                return interest;
            });
        }

        if (data.experiences) {
            this.experiences = data.experiences.map((_experience: ExperienceModel) => {
                let experience: ExperienceModel = new ExperienceModel();
                experience.setData(_experience);
                return experience;
            });
        }

        if (data.awards) {
            this.awards = data.awards.map((_award: AwardModel) => {
                let award: AwardModel = new AwardModel();
                award.setData(_award);
                return award;
            });
        }

        if (data.jobs) {
            this.jobs = data.jobs.map((_job: JobModel) => {
                let job: JobModel = new JobModel();
                job.setData(_job);
                return job;
            });
        }

        if (data.projects) {
            this.projects = data.projects.map((_project: ProjectModel) => {
                let project: ProjectModel = new ProjectModel();
                project.setData(_project);
                return project;
            });
        }

        if (data.opportunities) {
            this.opportunities = data.opportunities.map((_opportunity: OpportunityModel) => {
                let opportunity: OpportunityModel = new OpportunityModel();
                opportunity.setData(_opportunity);
                return opportunity;
            });
        }

        if (data.languages) {
            this.languages = data.languages.map((_language: LanguageModel) => {
                let language: LanguageModel = new LanguageModel();
                language.setData(_language);
                return language;
            });
        }
    }
}