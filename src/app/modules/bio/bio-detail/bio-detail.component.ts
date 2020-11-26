import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta } from '@angular/platform-browser';

// import { SearchModel } from '../../shared/models/superhero.model';
// import { SuperHeroService } from '../../shared/services/superhero.service';
// import { SUPERHERO } from '../../../environments/environment';

@Component({
  selector: 'app-bio-detail',
  templateUrl: './bio-detail.component.html',
  styleUrls: ['./bio-detail.component.scss']
})
export class BioDetailComponent {
  // export class BioComponent implements OnInit, OnDestroy {
  //   private _superHeroBehaviorSubject$: BehaviorSubject<SearchModel> = new BehaviorSubject(null)
  //   superHero$: Observable<SearchModel> = this._superHeroBehaviorSubject$.asObservable()

  //   constructor(
  //     private _superHeroService: SearchService,
  //     private _activatedRoute: ActivatedRoute,
  //     private _title: Title,
  //     private _meta: Meta
  //   ) { }

  //   ngOnInit(): void {
  //     this.startSubscribers()
  //   }

  //   ngOnDestroy(): void {
  //     this._superHeroBehaviorSubject$.unsubscribe()
  //   }

  //   private startSubscribers(): void {
  //     this._activatedRoute.params.pipe(
  //       filter((params: Params) => params.superheroId),
  //       map((params: Params) => params.superheroId)
  //     ).subscribe((id: number) => this.detail(id))
  //   }

  //   detail(id: number): void {
  //     this._superHeroService.detail(id)
  //       .subscribe(
  //         (superHero: SearchModel) => {
  //           this._title.setTitle(`${superHero.titleSEO} / ${SUPERHERO.CONFIGURATION.TITLE}`)
  //           this._meta.updateTag({
  //             name: 'description',
  //             content: superHero.descriptionSEO
  //           })

  //           this._meta.updateTag({
  //             name: 'keywords',
  //             content: superHero.keywordsSEO
  //           })

  //           this._superHeroBehaviorSubject$.next(superHero)
  //         }
  //       )
  //   }
}