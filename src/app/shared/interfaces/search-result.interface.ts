import { AggregatorsInterface } from './aggregators.interface';
import { OpportunityModel } from '../models/opportunity.model';
import { PeopleModel } from '../models/people.model';

export interface SearchResultInterface {
    aggregators: AggregatorsInterface;
    offset: number;
    results: OpportunityModel[] | PeopleModel[];
    size: number;
    total: number;
}