import {animate, group, query, style, transition, trigger} from "@angular/animations";
import {RouteList} from "./ad.interface";

export const adRouteAnimations = trigger('adRouteAnimations', [
  transition(`${RouteList.CSS} => ${RouteList.SVG_ANIMATION}`, toggleRoute(RouteList.CSS)),
  transition(`* => ${RouteList.CSS}, * => ${RouteList.SVG_ANIMATION}, * => ${RouteList.JS_ANIMATION}`, showRoute()),
  // transition(`${RouteList.CSS} => ${RouteList.JS_ANIMATION}`, toggleRoute(RouteList.CSS)),
]);

function toggleRoute(route: RouteList = RouteList.CSS) {
  const optional = { optional: true };
  /*const adRouteTransformOrigin = {
    [RouteList.CSS]: '375px 0',
    [RouteList.SVG_ANIMATION]: '545px 0',
    [RouteList.JS_ANIMATION]: '700px 0',
  };*/

  return [
    group([
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          opacity: 1,
        }),
        animate('2s ease', style({ transform: 'scale(1)' }))
      ]),
      query(':enter', [
        style({ transform: 'scale(0)' }),
        animate('2s ease', style({ transform: 'scale(1)' }))
      ]),
      query(':leave', [
        animate('2s ease', style({ transform: 'scale(0)' }))
      ])
    ])
  ]
  /*return [
    query(
      ':enter',
      [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          opacity: 1,
          transformOrigin: adRouteTransformOrigin[route],
          transform: 'scale(0)',
        }),
        animate('2000ms ease', style({ transform: 'scale(1)' }))
      ],
      optional
    )
  ];*/
}

function showRoute(route: RouteList = RouteList.CSS) {
  const optional = { optional: true };
  return [
    query(
      ':enter',
      [
        style({ opacity: 0 }),
        animate('2000ms ease', style({ opacity: 1 }))
      ],
      optional
    ),
  ];
}
