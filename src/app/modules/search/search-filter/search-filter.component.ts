import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, distinct, map } from 'rxjs/operators';
import { Params, ParamMap, Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit, OnDestroy {
  private _activatedRouteQueryParamFilterSubscription$: Subscription
  aggregateForm: FormGroup = new FormGroup({
    aggregate: new FormControl('')
  })

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.startFiltervalueChanges()
    this.startActivatedRouteQueryParamFilterSubscription()
  }

  ngOnDestroy(): void {
    this._activatedRouteQueryParamFilterSubscription$.unsubscribe()
  }

  private startFiltervalueChanges(): void {
    this.aggregateForm.controls.aggregate.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
    ).subscribe(() => this.addAggregateToRouteQueryParams())
  }

  private startActivatedRouteQueryParamFilterSubscription(): void {
    this._activatedRouteQueryParamFilterSubscription$ = this._activatedRoute.queryParamMap.pipe(
      distinct((paramMap: ParamMap) => paramMap.has('aggregate') === this.aggregateForm.controls.aggregate.value),
      map((paramMap: ParamMap) => paramMap.get('aggregate'))
    ).subscribe((aggregate: string) => {
      this.aggregateForm.controls.aggregate.setValue(aggregate)
    })
  }

  addAggregateToRouteQueryParams(aggregate: string = this.aggregateForm.controls.aggregate.value): void {
    let params: Params = {
      aggregate: aggregate || null
    }

    this._router.navigate([], {
      relativeTo: this._activatedRoute,
      queryParams: params,
      queryParamsHandling: 'merge'
    })
  }

  onSubmit(): void {
    this.addAggregateToRouteQueryParams()
  }
}
