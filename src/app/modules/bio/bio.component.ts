import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

// import { SearchService } from '../../shared/services/superhero.service';
// import { SearchModel } from '../../shared/models/superhero.model';
// import { SUPERHERO } from '../../../environments/environment';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent {
// export class BioComponent implements OnInit, OnDestroy {
  // private _activatedRouteQueryParamFilterSubscription$: Subscription
  // private _superHeroesBehaviorSubject$: BehaviorSubject<SearchModel[]> = new BehaviorSubject(null)
  // superHeroes$: Observable<SearchModel[]> = this._superHeroesBehaviorSubject$.asObservable()

  // constructor(
  //   private _superHeroService: SearchService,
  //   private _title: Title,
  //   private _meta: Meta,
  //   private _activatedRoute: ActivatedRoute
  // ) { }

  // ngOnInit(): void {
  //   this.startActivatedRouteQueryParamFilterSubscription()
  // }

  // ngOnDestroy(): void {
  //   this._superHeroesBehaviorSubject$.unsubscribe()
  //   this._activatedRouteQueryParamFilterSubscription$.unsubscribe()
  // }

  // private startActivatedRouteQueryParamFilterSubscription(): void {
  //   this._activatedRouteQueryParamFilterSubscription$ = this._activatedRoute.queryParamMap.pipe(
  //     map((paramMap: ParamMap) => paramMap.get('filter'))
  //   ).subscribe((filter: string) => this.list(filter))
  // }

  // list(filter: string = null): void {
  //   const random: boolean = filter ? false : true
  //   this._superHeroService.list(filter, random)
  //     .subscribe(
  //       (superHeroes: SearchModel[]) => {
  //         this._title.setTitle(`${(<{ [key: string]: string }>SUPERHERO.CONFIGURATION.LIST).TITLE} / ${SUPERHERO.CONFIGURATION.TITLE}`)

  //         this._meta.updateTag({
  //           name: 'description',
  //           content: superHeroes.reduce((description: string, superHero: SearchModel) => `${superHero.name}, ${description} `, '')
  //         })

  //         this._meta.updateTag({
  //           name: 'keywords',
  //           content: superHeroes.reduce((keywords: string, superHero: SearchModel) => `${superHero.name},${keywords} `, '')
  //         })

  //         this._superHeroesBehaviorSubject$.next(superHeroes)
  //       }
  //     )
  // }

  // trackByFunction(superHeroModel: SearchModel): number {
  //   return superHeroModel.id
  // }
}
