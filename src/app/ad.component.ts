import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { adRouteLinkList } from './ad.interface';
import {animate, query, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'ad-root',
  templateUrl: './ad.component.html',
  styleUrls: ['./scss/index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0 }),
          animate('300ms ease', style({opacity: 1})),
        ], {optional: true})
      ])
    ])
  ]
})
export class AdComponent {
  readonly routeList = adRouteLinkList;

  public prepareRoute(outlet: RouterOutlet): void {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
