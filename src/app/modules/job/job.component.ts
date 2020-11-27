import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  constructor(
    private _title: Title
  ) { }

  ngOnInit(): void {
    this._title.setTitle(`${environment.configuration.list.jobs.title} / ${environment.configuration.general.title}`)
  }
}
