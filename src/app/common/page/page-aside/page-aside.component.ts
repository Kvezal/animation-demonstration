import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ad-page-aside',
  template: '<ng-content></ng-content>',
  styleUrls: ['./scss/page-aside/_ad-page-aside.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageAsideComponent {

}
