import { ChangeDetectionStrategy, Component, OnChanges, OnInit } from '@angular/core';
import { PageService } from './page.service';

@Component({
  selector: 'ad-page',
  templateUrl: './page.component.html',
  styleUrls: ['./scss/index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent implements OnInit, OnChanges {
  /** page title */
  public title = '';
  /** navigation menu of page */
  public navigationList = [];

  constructor(private _pageService: PageService) {}

  ngOnInit(): void {
    this.title = this._pageService.title;
    this.navigationList = this._pageService.navigationList;
  }

  ngOnChanges(): void {
    this.title = this._pageService.title;
    this.navigationList = this._pageService.navigationList;
  }
}
