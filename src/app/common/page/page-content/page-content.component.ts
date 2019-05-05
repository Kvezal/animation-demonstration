import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ad-page-content',
  template: '<ng-content></ng-content>',
  styleUrls: ['./scss/page-content/_ad-page-content.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageContentComponent {

}
