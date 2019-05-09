import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';

// export const hide = trigger('routeAnimations', [
//   css('* => void', [
//     query(':leave', [ style({ opacity: 0 }) ], {optional: true}),
//     query(':enter', [
//       animate('600ms ease', style({ opacity: 1 }))
//     ], optional)
//   ])
// ]);

// export const appearancer = trigger('routeAnimations', [
//   transition(`* <=> *`, appearanceTo())
// ]);
//
// function appearanceTo() {
//   const optional = {optional: true};
//   return [
//     query(':enter, :leave', [ style({ opacity: 0 }) ], optional),
//     query(':enter', [
//       animate('600ms ease', style({ opacity: 1 }))
//     ], optional)
//   ];
// }
//
// export const fader = trigger('routeAnimations', [
//   transition('* <=> *', [
//     query(':enter, :leave', [
//       style({
//         position: 'absolute',
//         left: 0,
//         width: '100%',
//         opacity: 0,
//         transform: 'scale(0) translateY(100%)',
//       }),
//     ], {optional: true}),
//     query(':enter', [
//       animate('600ms ease',
//         style({
//           opacity: 1,
//           transform: 'scale(1) translateY(0)',
//         })
//       )
//     ], {optional: true})
//   ])
// ]);
//
// export const slider =
//   trigger('routeAnimations', [
//     transition(`* => ${RouteList.TRANSFORM}`, slideTo('left')),
//     transition(`${RouteList.TRANSFORM} => *`, slideTo('right')),
//     transition(`* => ${RouteList.JS_ANIMATION}`, slideTo('right')),
//     transition(`${RouteList.JS_ANIMATION} => *`, slideTo('left'))
//   ]);
//
// function slideTo(direction: string) {
//   const optional = { optional: true };
//   return [
//     query(':enter, :leave', [
//       style({
//         position: 'absolute',
//         top: 0,
//         [direction]: 0,
//         width: '100%',
//       })
//     ], optional),
//     query(':enter', [
//       style({ [direction]: '-100%' })
//     ]),
//     group([
//       query(':leave', [
//         animate('600ms ease', style({ [direction]: '100%'}))
//       ]),
//       query(':enter', [
//         animate('600ms ease', style({ [direction]: '0%'}))
//       ]),
//     ])
//   ];
// }
//
// export const transformer =
//   trigger('routeAnimations', [
//     transition(`* => ${RouteList.TRANSFORM}`, translateTo({ x: -100, y: -100, rotate: -720 })),
//     transition(`${RouteList.TRANSFORM} => *`, translateTo({ x: 100, y: -100, rotate: -360 })),
//     transition(`* => ${RouteList.JS_ANIMATION}`, translateTo({ x: -100, y: -100, rotate: 360 })),
//     transition(`${RouteList.JS_ANIMATION} => *`, translateTo({ x: 100, y: -100, rotate: 90 }))
//   ]);
//
// function translateTo({ x = 100, y = 0, rotate = 0}) {
//   const optional = { optional: true };
//   return [
//     query(':enter, :leave', [
//       style({
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//       })
//     ], optional),
//     query(':leave', [
//       style({ transform: `translate(${ x }%, ${ y }%) rotate(${ rotate }deg)` })
//     ], optional),
//     group([
//       query(':leave', [
//         animate('600ms ease-out',
//           style({ transform: `translate(${ x }%, ${ y }%) rotate(${ rotate }deg)` })
//         )
//       ], optional),
//       query(':enter', [
//         animate('600ms ease-out',
//           style({ transform: `translate(0, 0) rotate(0deg)` })
//         )
//       ], optional)
//     ])
//   ];
// }
// //
// export const stepper = trigger('routeAnimations', [
//   transition('* <=> *', [
//     query(':enter, :leave', [
//       style({
//         position: 'absolute',
//         left: 0,
//         width: '100%',
//       }),
//     ], { optional: true }),
//     group([
//       query(':enter', [
//         animate('2000ms ease', keyframes([
//           style({ transform: 'scale(0) translateX(100%)', offset: 0 }),
//           style({ transform: 'scale(.5) translateX(25%)', offset: 0.3 }),
//           style({ transform: 'scale(1) translateX(0%)', offset: 1 }),
//         ]))
//       ], { optional: true }),
//       query(':leave', [
//         animate('2000ms ease', keyframes([
//           style({ transform: 'scale(1) translateX(0%)', offset: 0 }),
//           style({ transform: 'scale(0) translateX(-25%)', offset: 0.35 }),
//           style({ opacity: 0, transform: 'translateX(-50%) rotate(-180deg) scale(6)', offset: 1 }),
//         ]))
//       ], { optional: true }),
//     ])
//   ])
// ]);
