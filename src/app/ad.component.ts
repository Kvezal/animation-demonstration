import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { adRouteLinkList } from './ad.interface';
import { fader, slider, stepper, transformer } from './ad-route-animations';

@Component({
  selector: 'ad-root',
  templateUrl: './ad.component.html',
  styleUrls: ['./scss/index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    // fader,
    // slider,
    // transformer,
    stepper,
  ],
})
export class AdComponent {
  readonly routeList = adRouteLinkList;

  public prepareRoute(outlet: RouterOutlet): void {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
