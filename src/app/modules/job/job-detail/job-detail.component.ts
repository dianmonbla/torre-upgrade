import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

// Custom services
import { TorreAPIService } from 'src/app/shared/services/torre-api.service';
import { environment } from 'src/environments/environment';

// Custom models
import { JobModel } from 'src/app/shared/models/job.model';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit, OnDestroy {
  public opportunityBehaviorSubject$: BehaviorSubject<JobModel> = new BehaviorSubject(null)

  constructor(
    private _torreAPIService: TorreAPIService,
    private _activatedRoute: ActivatedRoute,
    private _title: Title,
    private _meta: Meta
  ) { }

  ngOnInit(): void {
    this.detail(this._activatedRoute.snapshot.params.id);
  }

  ngOnDestroy(): void {
    if (this.opportunityBehaviorSubject$)
      this.opportunityBehaviorSubject$.unsubscribe()
  }

  detail(id: string): void {
    this._torreAPIService.job(id)
      .subscribe(
        (opportunity: JobModel) => {
          this._title.setTitle(` / ${environment.configuration.list.jobs.title} / ${environment.configuration.general.title}`)

          // this._meta.updateTag({
          //   name: 'description',
          //   content: opportunity.person.professionalHeadline
          // })

          // this._meta.updateTag({
          //   name: 'keywords',
          //   content: opportunity.experiences.reduce((keywords: string, experience: ExperienceModel) => `${experience.name}, ${keywords} `, '')
          // })

          this.opportunityBehaviorSubject$.next(opportunity)
        }
      )
  }
}