import {ChangeDetectionStrategy, Component} from '@angular/core';

import {IRouterLink} from '../../interface/interface';
import {sideNav, subSideNav} from './page-nav.animations';
import {PageService} from '../page.service';

@Component({
  selector: 'ad-page-nav',
  templateUrl: './page-nav.component.html',
  styleUrls: ['./scss/page-nav/_ad-page-nav.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [sideNav, subSideNav],
})
export class PageNavComponent {
  /** navigation menu of page */
  public navigationList: IRouterLink[] = this._pageService.navigationList;

  constructor(private _pageService: PageService) {}

  public toggleChildrenDisplay(item: IRouterLink): void {
    item.isShowChildren = !item.isShowChildren;
  }
}
