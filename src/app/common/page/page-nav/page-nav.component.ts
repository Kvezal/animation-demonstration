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
      path: ['description'],
      name: 'Описание',
    },
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
        {path: ['transition', 'property'], name: 'css-property'},
        {path: ['transition', 'duration'], name: 'css-duration'},
        {path: ['transition', 'timing-function'], name: 'css-timing-function'},
        {path: ['transition', 'delay'], name: 'css-delay'},
      ]
    },
    {
      path: ['example'],
      name: 'Примеры',
    }
  ];

  public toggleChildrenDisplay(item: IRouterLink): void {
    item.isShowChildren = !item.isShowChildren;
  }
}
