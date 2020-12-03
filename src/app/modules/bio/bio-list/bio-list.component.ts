import { Component, OnDestroy, OnInit, ViewChild, AfterViewChecked, NgZone } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { filter, first, map, pairwise, tap, throttleTime } from 'rxjs/operators';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { CdkScrollable, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { environment } from 'src/environments/environment';

// Custom services
import { AGGREGATE_OF_PAGE_KEY, DOCUMENTS_PER_ROW_LISTING, NUMBER_OF_PAGE, PAGE_NUMBER_KEY, SIZE_OF_DOCUMENTS_PER_PAGE, SIZE_OF_DOCUMENTS_PER_PAGE_KEY, TorreAPIService } from 'src/app/shared/services/torre-api.service';

// Custom Models
import { PeopleModel } from 'src/app/shared/models/people.model';
import { DataModel } from 'src/app/shared/models/data.model';

// Custom Interfaces
import { SearchResultInterface } from 'src/app/shared/interfaces/search-result.interface';

@Component({
  selector: 'app-bio-list',
  templateUrl: './bio-list.component.html',
  styleUrls: ['./bio-list.component.scss'],
  queries: {
    cdkVirtualScrollViewport: new ViewChild(CdkScrollable)
  }
})
export class BioListComponent implements OnInit, AfterViewChecked, OnDestroy {
  private _activatedRouteQueryParamsSubscription$: Subscription;
  private _cdkVirtualScrollViewportScrolledIndexChangeSuscription$: Subscription;
  private _cdkVirtualScrollViewportSubject$: Subject<CdkVirtualScrollViewport> = new Subject();

  private _pageNumber: number = this._torreAPIService.getPeoplePageNumberState();
  public get pageNumber(): number {
    return this._pageNumber;
  };

  private _total: number = this._torreAPIService.getPeopleTotalState();
  public get total(): number {
    return this._total;
  };

  private _sizeOfDocumentsPerPage: number = this._torreAPIService.getPeopleSizeState();
  public get sizeOfDocumentsPerPage(): number {
    return this._sizeOfDocumentsPerPage;
  };

  public cdkVirtualScrollViewport: CdkVirtualScrollViewport;
  public biosBehaviorSubject$: BehaviorSubject<PeopleModel[][]> = new BehaviorSubject(this._torreAPIService.getPeopleState() ? this._map(<PeopleModel[]>this._torreAPIService.getPeopleState().results) : null);
  public isLoadingBehaviorSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  public get totalPages(): number {
    return Math.round(this._total / this._sizeOfDocumentsPerPage);
  }

  constructor(
    private _torreAPIService: TorreAPIService,
    private _title: Title,
    private _meta: Meta,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _ngZone: NgZone
  ) { }

  ngOnInit(): void {
    this._setTitlePage();
    this._startCdkVirtualScrollViewportSubject();
    this._startActivatedRouteQueryParamFilterSubscription();
  }

  ngAfterViewChecked(): void {
    this._cdkVirtualScrollViewportSubject$.next(this.cdkVirtualScrollViewport);
  }

  ngOnDestroy(): void {
    if (this.biosBehaviorSubject$)
      this.biosBehaviorSubject$.unsubscribe();

    if (this._activatedRouteQueryParamsSubscription$)
      this._activatedRouteQueryParamsSubscription$.unsubscribe();

    if (this._cdkVirtualScrollViewportScrolledIndexChangeSuscription$)
      this._cdkVirtualScrollViewportScrolledIndexChangeSuscription$.unsubscribe();

    if (this.isLoadingBehaviorSubject$)
      this.isLoadingBehaviorSubject$.unsubscribe();
  }

  private _setTitlePage(): void {
    this._title.setTitle(`${environment.configuration.list.people.title} / ${environment.configuration.general.title}`);
  }

  private _setDescriptionPage(description: string): void {
    this._meta.updateTag({
      name: 'description',
      content: description
    });
  }

  private _setKeywordsPage(keywords: string): void {
    this._meta.updateTag({
      name: 'keywords',
      content: keywords
    });
  }

  private _startCdkVirtualScrollViewportSubject(): void {
    this._cdkVirtualScrollViewportSubject$.pipe(
      first((cdkVirtualScrollViewport: CdkVirtualScrollViewport) => !!cdkVirtualScrollViewport)
    ).subscribe(() => this._startCdkVirtualScrollViewportScrolledIndexChangeSuscription())
  }

  private _startCdkVirtualScrollViewportScrolledIndexChangeSuscription(): void {
    this.cdkVirtualScrollViewport.elementScrolled().pipe(
      filter(() => !this.isLoadingBehaviorSubject$.value),
      map(() => this.cdkVirtualScrollViewport.measureScrollOffset('bottom')),
      pairwise(),
      filter(([y1, y2]) => (y2 < y1 && y2 < 140)),
      throttleTime(200),
      map(() => this._pageNumber + 1),
      filter((newPageNumber: number) => newPageNumber <= this.totalPages),
      tap((newPageNumber: number) => this._pageNumber = newPageNumber),
      tap(() => this.isLoadingBehaviorSubject$.next(true)),
    ).subscribe((newPageNumber: number) => {
      let queryParams: { [key: string]: number } = {};
      queryParams[PAGE_NUMBER_KEY] = newPageNumber;
      this._ngZone.run(() => {
        this.addAggregateToRouteQueryParams(<Params>queryParams);
      });
    });
  }

  private _startActivatedRouteQueryParamFilterSubscription(): void {
    this._activatedRouteQueryParamsSubscription$ = this._activatedRoute.queryParams.pipe(
      map(this._mapQueryParams),
      tap((queryParams: Params) => this._pageNumber = queryParams[PAGE_NUMBER_KEY])
    ).subscribe((queryParams: Params) => this.list(queryParams));
  }

  private addAggregateToRouteQueryParams(queryParams: Params): void {
    this._router.navigate([], {
      relativeTo: this._activatedRoute,
      queryParams: queryParams,
      queryParamsHandling: 'merge'
    })
  }

  private _mapQueryParams(_queryParams: Params): Params {
    let queryParams: Params = Object.assign({}, _queryParams);

    queryParams[AGGREGATE_OF_PAGE_KEY] = queryParams[AGGREGATE_OF_PAGE_KEY]
      ? String(queryParams[AGGREGATE_OF_PAGE_KEY])
      : null;

    queryParams[PAGE_NUMBER_KEY] = queryParams[PAGE_NUMBER_KEY]
      ? Number(queryParams[PAGE_NUMBER_KEY])
      : NUMBER_OF_PAGE;

    queryParams[SIZE_OF_DOCUMENTS_PER_PAGE_KEY] = queryParams[SIZE_OF_DOCUMENTS_PER_PAGE_KEY]
      ? Number(queryParams[SIZE_OF_DOCUMENTS_PER_PAGE_KEY])
      : SIZE_OF_DOCUMENTS_PER_PAGE;

    return queryParams;
  }

  // Map bios to [[[],[],[]], [[],[],[]],...] for infinite virtual scroll
  private _map(bios: PeopleModel[]): PeopleModel[][] {
    if (!Array.isArray(bios) || !bios.length)
      return null;

    return bios
      .map((bio: PeopleModel, position: number, bios: PeopleModel[]) => bios.slice(position, position + DOCUMENTS_PER_ROW_LISTING))
      .filter((bios: PeopleModel[], position: number) => position % DOCUMENTS_PER_ROW_LISTING === 0);
  }

  compensationBio(compensations: { [key: string]: DataModel }): DataModel {
    let compensationKeys: string[] = compensations ? Object.keys(compensations) : null;
    return compensationKeys ? compensations[compensationKeys[0]] : new DataModel();
  }

  list({ aggregate, pageNumber, size }: Params): void {
    this._torreAPIService.people(aggregate, pageNumber, size).pipe(
      tap((searchResult: SearchResultInterface) => this._total = searchResult.total),
      map((searchResult: SearchResultInterface) => searchResult.results),
      tap((bios: PeopleModel[]) => {
        const descriptionElement: HTMLMetaElement = this._meta.getTag('description');
        let description: string = bios.reduce((description: string, person: PeopleModel) => `${person.professionalHeadline}, ${description} `, '');

        if (descriptionElement && descriptionElement.content)
          description = `${descriptionElement.content}, ${description}`;

        this._setDescriptionPage(description);
      }),
      tap((bios: PeopleModel[]) => {
        const keywordsElement: HTMLMetaElement = this._meta.getTag('keywords');
        let keywords: string = bios.reduce((keywords: string, person: PeopleModel) => `${person.skills.join(', ')}, ${keywords} `, '');

        if (keywordsElement && keywordsElement.content)
          keywords = `${keywordsElement.content}, ${keywords}`;

        this._setKeywordsPage(keywords);
      })
    ).subscribe(
      (bios: PeopleModel[]) => {
        let currentBiosMap: PeopleModel[][] = Array.isArray(this.biosBehaviorSubject$.value) ? this.biosBehaviorSubject$.value : new Array<PeopleModel[]>();
        this._map(bios).forEach((people: PeopleModel[]) => currentBiosMap.push(people));
        this.biosBehaviorSubject$.next(currentBiosMap);
        this.isLoadingBehaviorSubject$.next(false);
      },
      () => this.isLoadingBehaviorSubject$.next(false)
    );
  }

  trackByFunction(person: PeopleModel): string {
    return person.username;
  }
}