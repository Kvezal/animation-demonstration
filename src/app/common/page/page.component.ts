import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ad-page',
  template: '<ng-content></ng-content>',
  styleUrls: ['./scss/page/_ad-page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent {

}
