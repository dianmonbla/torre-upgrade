import { AggregatorsInterface } from './aggregators.interface';import { OpportunityModel } from '../models/opportunity.model';

export interface SearchResultInterface {
    aggregators: AggregatorsInterface;
    offset: number;
    results: OpportunityModel[];
    size: number;
    total: number;
}