import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

// Custom services
import { TorreAPIService } from 'src/app/shared/services/torre-api.service';

// Custom models
import { BioModel } from 'src/app/shared/models/bio.model';
import { ExperienceModel } from 'src/app/shared/models/experience.model';

@Component({
  selector: 'app-bio-detail',
  templateUrl: './bio-detail.component.html',
  styleUrls: ['./bio-detail.component.scss']
})
export class BioDetailComponent implements OnInit, OnDestroy {
  public bioBehaviorSubject$: BehaviorSubject<BioModel> = new BehaviorSubject(null)

  constructor(
    private _torreAPIService: TorreAPIService,
    private _activatedRoute: ActivatedRoute,
    private _title: Title,
    private _meta: Meta
  ) { }

  ngOnInit(): void {
    this.detail(this._activatedRoute.snapshot.params.username);
  }

  ngOnDestroy(): void {
    if (this.bioBehaviorSubject$)
      this.bioBehaviorSubject$.unsubscribe()
  }

  detail(username: string): void {
    this._torreAPIService.bio(username)
      .subscribe(
        (bio: BioModel) => {
          this._title.setTitle(`${bio.person.name} / ${environment.configuration.list.people.title} / ${environment.configuration.general.title}`)

          this._meta.updateTag({
            name: 'description',
            content: bio.person.professionalHeadline
          })

          this._meta.updateTag({
            name: 'keywords',
            content: bio.experiences.reduce((keywords: string, experience: ExperienceModel) => `${experience.name}, ${keywords} `, '')
          })

          this.bioBehaviorSubject$.next(bio)
        }
      )
  }
}