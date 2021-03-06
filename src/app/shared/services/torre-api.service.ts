import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, retry } from 'rxjs/operators';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

// Custom interfaces
import { SearchResultInterface } from '../interfaces/search-result.interface';

// Custom models
import { OpportunityModel } from '../models/opportunity.model';
import { PeopleModel } from '../models/people.model';
import { BioModel } from '../models/bio.model';
import { JobModel } from '../models/job.model';

// Custom services
import { PlatformService } from './platform.service';

export const OFFSET_OF_PAGE: number = 0;
export const SIZE_OF_DOCUMENTS_PER_PAGE: number = 9;
const BIO_STATE_KEY: any = makeStateKey('bio');
const JOB_STATE_KEY: any = makeStateKey('job');
const OPPORTUNITIES_STATE_KEY: any = makeStateKey('opportunities');
const PEOPLE_STATE_KEY: any = makeStateKey('people');

@Injectable({ providedIn: 'root' })
export class TorreAPIService {
    constructor(
        private _httpClient: HttpClient,
        private _transferState: TransferState,
        private _platformService: PlatformService
    ) { }

    private _reduceQueryParams(aggregate: string = null, offset: number = OFFSET_OF_PAGE, size: number = SIZE_OF_DOCUMENTS_PER_PAGE): string {
        let queryParams: string[] = [];

        if (aggregate)
            queryParams.push(`aggregate=${aggregate}`);

        if (offset)
            queryParams.push(`offset=${offset}`);

        if (size)
            queryParams.push(`size=${size}`);

        return queryParams.join('&');
    }

    public opportunitiesStateExists(): boolean {
        return this._transferState.hasKey<OpportunityModel[]>(OPPORTUNITIES_STATE_KEY);
    }

    private _setOpportunitiesState(oportunities: OpportunityModel[]): void {
        this._transferState.set<OpportunityModel[]>(OPPORTUNITIES_STATE_KEY, oportunities);
    }

    public getOpportunitiesState(): OpportunityModel[] {
        return this._transferState.get<OpportunityModel[]>(OPPORTUNITIES_STATE_KEY, null);
    }

    public removeOpportunitiesState(): void {
        this._transferState.remove<OpportunityModel[]>(OPPORTUNITIES_STATE_KEY);
    }

    public peopleStateExists(): boolean {
        return this._transferState.hasKey<PeopleModel[]>(PEOPLE_STATE_KEY);
    }

    private _setPeopleState(people: PeopleModel[]): void {
        this._transferState.set<PeopleModel[]>(PEOPLE_STATE_KEY, people);
    }

    public getPeopleState(): PeopleModel[] {
        return this._transferState.get<PeopleModel[]>(PEOPLE_STATE_KEY, null);
    }

    public removePeopleState(): void {
        this._transferState.remove<PeopleModel[]>(PEOPLE_STATE_KEY);
    }

    public bioStateExists(): boolean {
        return this._transferState.hasKey<BioModel>(BIO_STATE_KEY);
    }

    private _setBioState(bio: BioModel): void {
        this._transferState.set<BioModel>(BIO_STATE_KEY, bio);
    }

    public getBioState(): BioModel {
        return this._transferState.get<BioModel>(BIO_STATE_KEY, null);
    }

    public removeBioState(): void {
        this._transferState.remove<BioModel>(BIO_STATE_KEY);
    }

    public jobStateExists(): boolean {
        return this._transferState.hasKey<JobModel>(JOB_STATE_KEY);
    }

    private _setJobState(job: JobModel): void {
        this._transferState.set<JobModel>(JOB_STATE_KEY, job);
    }

    public getJobState(): JobModel {
        return this._transferState.get<JobModel>(JOB_STATE_KEY, null);
    }

    public removeJobState(): void {
        this._transferState.remove<JobModel>(JOB_STATE_KEY);
    }

    private _mapOpportunity(_opportunity: OpportunityModel): OpportunityModel {
        let opportunity: OpportunityModel = new OpportunityModel();
        opportunity.setData(_opportunity);
        return opportunity;
    }

    private _mapOpportunities(opportunities: OpportunityModel[]): OpportunityModel[] {
        return opportunities.map((opportunity: OpportunityModel) => this._mapOpportunity(opportunity))
    }

    private _mapPerson(_person: PeopleModel): PeopleModel {
        let person: PeopleModel = new PeopleModel();
        person.setData(_person);
        return person;
    }

    private _mapPeople(people: PeopleModel[]): PeopleModel[] {
        return people.map((person: PeopleModel) => this._mapPerson(person))
    }

    private _mapBio(_bio: BioModel): BioModel {
        let bio: BioModel = new BioModel();
        bio.setData(_bio);
        return bio;
    }

    private _mapJob(_job: JobModel): JobModel {
        let job: JobModel = new JobModel();
        job.setData(_job);
        return job;
    }

    public bio(username: string): Observable<BioModel> {
        if (this.bioStateExists())
            return of(this.getBioState()).pipe(
                tap(() => this.removeBioState())
            )

        return this._httpClient.get<BioModel>(`${environment.api.torre.resource.bio}/bios/${username}`)
            .pipe(
                retry(3),
                map((bio: BioModel) => this._mapBio(bio)),
                tap((bio: BioModel) => {
                    if (this._platformService.isServer())
                        this._setBioState(bio);
                })
            );
    }

    public job(id: string): Observable<JobModel> {
        if (this.jobStateExists())
            return of(this.getJobState()).pipe(
                tap(() => this.removeJobState())
            )

        return this._httpClient.get<JobModel>(`${environment.api.torre.resource.general}/opportunities/${id}`)
            .pipe(
                retry(3),
                map((job: JobModel) => this._mapJob(job)),
                tap((job: JobModel) => {
                    if (this._platformService.isServer())
                        this._setJobState(job);
                })
            );
    }

    public opportunities(aggregate: string = null, offset?: number, size?: number): Observable<OpportunityModel[]> {
        if (this.opportunitiesStateExists())
            return of(this.getOpportunitiesState()).pipe(
                tap(() => this.removeOpportunitiesState())
            )

        return this._httpClient.post<SearchResultInterface>(`${environment.api.torre.resource.search}/opportunities/_search?${this._reduceQueryParams(aggregate, offset, size)}`, null)
            .pipe(
                retry(3),
                map((searchResult: SearchResultInterface) => <OpportunityModel[]>searchResult.results),
                map((opportunities: OpportunityModel[]) => this._mapOpportunities(opportunities)),
                tap((opportunities: OpportunityModel[]) => {
                    if (this._platformService.isServer())
                        this._setOpportunitiesState(opportunities);
                })
            );
    }

    public people(aggregate: string = null, offset?: number, size?: number): Observable<PeopleModel[]> {
        if (this.peopleStateExists())
            return of(this.getPeopleState()).pipe(
                tap(() => this.removePeopleState())
            )

        return this._httpClient.post<SearchResultInterface>(`${environment.api.torre.resource.search}/people/_search?${this._reduceQueryParams(aggregate, offset, size)}`, null)
            .pipe(
                retry(3),
                map((searchResult: SearchResultInterface) => <PeopleModel[]>searchResult.results),
                map((people: PeopleModel[]) => this._mapPeople(people)),
                tap((people: PeopleModel[]) => {
                    if (this._platformService.isServer())
                        this._setPeopleState(people);
                })
            );
    }
}