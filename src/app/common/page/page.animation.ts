import {animate, keyframes, query, style, transition, trigger} from '@angular/animations';

export const sidebar = trigger('sidebarAnimations', [
  transition('* <=> *', showSidebar())
]);

// function showSidebar() {
//   const optional = { optional: true };
//   return [
//     query(
//       ':enter.ad-page-nav__item, :leave.ad-page-nav__item',
//       [ style({ width: '0', height: '20px', opacity: 0 }) ],
//       optional
//     ),
//     query(
//       ':enter.ad-page-nav__item',
//       [ animate('600ms ease', style({ width: '*', height: '*', opacity: 1 })) ],
//       optional
//     )
//   ];
// }

function showSidebar() {
  const optional = { optional: true };
  return [
    query(
      ':enter.ad-page-nav__item, :leave.ad-page-nav__item',
      [ style({ width: '0', height: '20px', opacity: 0 }) ],
      optional
    ),
    query(
      ':enter.ad-page-nav__item',
      [
        animate('600ms ease',
          keyframes([
            style({ width: '0', height: '20px', opacity: 0, offset: 0 }),
            style({ width: '*', height: '20px', opacity: 0, offset: 0.5 }),
            style({ width: '*', height: '*', opacity: 1, offset: 1 }),
          ])
        )
      ]
    )
  ];
}
