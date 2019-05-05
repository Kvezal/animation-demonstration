import { ChangeDetectionStrategy, Component } from '@angular/core';

import { adRouteLinkList } from './ad.interface';

@Component({
  selector: 'ad-root',
  templateUrl: './ad.component.html',
  styleUrls: ['./scss/index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdComponent {
  readonly routeList = adRouteLinkList;
}
