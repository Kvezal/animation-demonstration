import {animate, group, query, style, transition, trigger} from "@angular/animations";
import {RouteList} from "./ad.interface";

export const adRouteAnimations = trigger('adRouteAnimations', [
  transition(`${RouteList.CSS} => ${RouteList.SVG_ANIMATION}`, toggleRoute(`${RouteList.CSS}To${RouteList.SVG_ANIMATION}`)),
  transition(`${RouteList.CSS} => ${RouteList.JS_ANIMATION}`, toggleRoute(`${RouteList.CSS}To${RouteList.JS_ANIMATION}`)),
  transition(`${RouteList.SVG_ANIMATION} => ${RouteList.CSS}`, toggleRoute(`${RouteList.SVG_ANIMATION}To${RouteList.CSS}`)),
  transition(`${RouteList.SVG_ANIMATION} => ${RouteList.JS_ANIMATION}`, toggleRoute(`${RouteList.SVG_ANIMATION}To${RouteList.JS_ANIMATION}`)),
  transition(`${RouteList.JS_ANIMATION} => ${RouteList.CSS}`, toggleRoute(`${RouteList.JS_ANIMATION}To${RouteList.CSS}`)),
  transition(`${RouteList.JS_ANIMATION} => ${RouteList.SVG_ANIMATION}`, toggleRoute(`${RouteList.JS_ANIMATION}To${RouteList.SVG_ANIMATION}`)),
  transition(`* => ${RouteList.CSS}, * => ${RouteList.SVG_ANIMATION}, * => ${RouteList.JS_ANIMATION}`, showRoute()),
]);

export const adHeaderAnimations = trigger('adHeaderAnimations', [
  transition('void => *', [
    query(':self', [
      style({ height: 0, overflow: 'hidden' }),
      animate('300ms ease', style({ height: '*' }))
    ], { optional: true }),
  ]),
  transition('* => void', [
    query(':self', [
      style({ height: '*', overflow: 'hidden' }),
      animate('300ms ease', style({ height: 0 }))
    ], { optional: true }),
  ])
])

function toggleRoute(route: string) {
  const optional = { optional: true };
  const adRouteTransformOrigin = {
    [`${RouteList.CSS}To${RouteList.SVG_ANIMATION}`]: {
      hidden: '375px 0',
      showing: '545px 0',
    },
    [`${RouteList.CSS}To${RouteList.JS_ANIMATION}`]: {
      hidden: '375px 0',
      showing: '700px 0',
    },
    [`${RouteList.SVG_ANIMATION}To${RouteList.CSS}`]: {
      hidden: '545px 0',
      showing: '375px 0',
    },
    [`${RouteList.SVG_ANIMATION}To${RouteList.JS_ANIMATION}`]: {
      hidden: '545px 0',
      showing: '700px 0',
    },
    [`${RouteList.JS_ANIMATION}To${RouteList.CSS}`]: {
      hidden: '700px 0',
      showing: '375px 0',
    },
    [`${RouteList.JS_ANIMATION}To${RouteList.SVG_ANIMATION}`]: {
      hidden: '700px 0',
      showing: '545px 0',
    },
  };

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
      ], optional),
      query(':enter', [
        style({
          transformOrigin: adRouteTransformOrigin[route].showing,
          transform: 'scale(0)',
        }),
        animate('500ms ease', style({ transform: 'scale(1)' }))
      ]),
      query(':leave', [
        style({
          transformOrigin: adRouteTransformOrigin[route].hidden,
        }),
        animate('500ms ease', style({
          transform: 'scale(0)',
        }))
      ])
    ])
  ];
}

function showRoute() {
  const optional = { optional: true };
  return [
    query(
      ':enter',
      [
        style({ opacity: 0 }),
        animate('1s ease', style({ opacity: 1 }))
      ],
      optional
    ),
  ];
}


