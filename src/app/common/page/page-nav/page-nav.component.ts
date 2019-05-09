import {ChangeDetectionStrategy, Component} from '@angular/core';

import {IRouterLink} from '../../interface/interface';
import {sidebar} from '../page.animation';

@Component({
  selector: 'ad-page-nav',
  templateUrl: './page-nav.component.html',
  styleUrls: ['./scss/page-nav/_ad-page-nav.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    sidebar
  ]
})
export class PageNavComponent {
  /** navigation menu of page */
  public navigationList: IRouterLink[] = [
    {
      path: ['transform'],
      name: 'Трансформации',
      isShowChildren: false,
      children: [
        {path: ['transform', 'translate'], name: 'Перемещение - translate()'},
        {path: ['transform', 'scale'], name: 'Масштабирование - scale()'},
        {path: ['transform', 'rotate'], name: 'Вращение - rotate()'},
        {path: ['transform', 'skew'], name: 'Наклон - skew()'},
        {path: ['transform', 'origin'], name: 'transform-origin'},
      ]
    },
    {
      path: ['transition'],
      name: 'Переходы',
      isShowChildren: false,
      children: [
        {path: ['transition', 'property'], name: 'transition-property'},
        {path: ['transition', 'duration'], name: 'transition-duration'},
        {path: ['transition', 'timing-function'], name: 'transition-timing-function'},
        {path: ['transition', 'delay'], name: 'transition-delay'},
      ]
    },

    {
      path: ['transition'],
      name: 'Переходы',
    }
  ];

  public toggleChildrenDisplay(item: IRouterLink): void {
    item.isShowChildren = !item.isShowChildren;
  }
}
