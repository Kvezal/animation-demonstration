import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ad-page-title',
  template: '<ng-content></ng-content>',
  styleUrls: ['./scss/page-title/_ad-page-title.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageTitleComponent {

}
