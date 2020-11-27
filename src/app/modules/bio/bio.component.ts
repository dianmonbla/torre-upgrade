import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {
  constructor(
    private _title: Title,
  ) { }

  ngOnInit(): void {
    this._title.setTitle(`${environment.configuration.list.people.title} / ${environment.configuration.general.title}`)
  }
}
