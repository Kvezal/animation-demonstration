import { ChangeDetectionStrategy, Component, OnChanges, OnInit } from '@angular/core';
import { PageService } from './page.service';

@Component({
  selector: 'ad-page',
  templateUrl: './page.component.html',
  styleUrls: ['./scss/page/_ad-page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent implements OnInit, OnChanges {
  /** page title */
  public title = '';

  constructor(private _pageService: PageService) {}

  ngOnInit(): void {
    this._getData();
  }

  ngOnChanges(): void {
    this._getData();
  }

  /**
   * Get data from service
   */
  private _getData(): void {
    this.title = this._pageService.title;
  }
}
