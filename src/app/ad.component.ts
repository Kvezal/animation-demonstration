import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { adRouteLinkList } from './ad.interface';
import { adHeaderAnimations, adRouteAnimations } from "./ad.animations";

@Component({
  selector: 'ad-root',
  templateUrl: './ad.component.html',
  styleUrls: ['./scss/index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [adRouteAnimations, adHeaderAnimations],
})
export class AdComponent {
  readonly routeList = adRouteLinkList;

  public isHeaderClose = false;

  public prepareRoute(outlet: RouterOutlet): void {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  public toggleHeader(): void {
    this.isHeaderClose = !this.isHeaderClose;
  }
}
