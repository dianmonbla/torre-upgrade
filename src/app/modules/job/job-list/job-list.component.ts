import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

// Custom services
import { OFFSET_OF_PAGE, SIZE_OF_DOCUMENTS_PER_PAGE, TorreAPIService } from 'src/app/shared/services/torre-api.service';

// Custom Models
import { OpportunityModel } from 'src/app/shared/models/opportunity.model';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit, OnDestroy {
  private _activatedRouteQueryParamFilterSubscription$: Subscription
  public opportunitiesBehaviorSubject$: BehaviorSubject<OpportunityModel[]> = new BehaviorSubject(this._torreAPIService.getOpportunitiesState())

  constructor(
    private _torreAPIService: TorreAPIService,
    private _title: Title,
    private _meta: Meta,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.startActivatedRouteQueryParamFilterSubscription()

    const queryParams: ParamMap = this._activatedRoute.snapshot.queryParamMap
    if (!queryParams.get('aggregate')
      && !queryParams.get('offset')
      && !queryParams.get('size'))
      this.list();
  }

  ngOnDestroy(): void {
    if (this.opportunitiesBehaviorSubject$)
      this.opportunitiesBehaviorSubject$.unsubscribe()

    if (this._activatedRouteQueryParamFilterSubscription$)
      this._activatedRouteQueryParamFilterSubscription$.unsubscribe()
  }

  private startActivatedRouteQueryParamFilterSubscription(): void {
    this._activatedRouteQueryParamFilterSubscription$ = this._activatedRoute.queryParamMap.pipe(
      filter((paramMap: ParamMap) => !!paramMap.get('aggregate')
        || !!paramMap.get('offset')
        || !!paramMap.get('size')
      )
    ).subscribe((paramMap: ParamMap) => this.list(paramMap.get('aggregate'), Number(paramMap.get('offset')), Number(paramMap.get('size'))))
  }

  list(aggregate: string = null, offset: number = OFFSET_OF_PAGE, size: number = SIZE_OF_DOCUMENTS_PER_PAGE): void {
    this._torreAPIService.opportunities(aggregate, offset, size)
      .subscribe(
        (opportunities: OpportunityModel[]) => {
          this._title.setTitle(`${environment.configuration.list.jobs.title} / ${environment.configuration.general.title}`)

          this._meta.updateTag({
            name: 'description',
            content: opportunities.reduce((description: string, opportunity: OpportunityModel) => `${opportunity.objective}, ${description} `, '')
          })

          this._meta.updateTag({
            name: 'keywords',
            content: opportunities.reduce((keywords: string, opportunity: OpportunityModel) => `${opportunity.skills.join(', ')}, ${keywords} `, '')
          })

          this.opportunitiesBehaviorSubject$.next(opportunities)
        }
      )
  }

  trackByFunction(opportunity: OpportunityModel): string {
    return opportunity.id
  }
}
