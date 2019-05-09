import {animate, keyframes, query, style, transition, trigger} from '@angular/animations';

export const sideNav = trigger('sideNavAnimations', [
  transition('* <=> *', [
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
  ])
]);

export const subSideNav = trigger('sideSubNavAnimations', [
  transition('* <=> *', showSubSideNav())
]);

function showSubSideNav() {
  const optional = { optional: true };
  return [
    query(
      ':enter',
      animate('500ms ease', keyframes([
        style({ height: '0', opacity: 0, offset: 0 }),
        style({ height: '*', opacity: 0, offset: 0.5 }),
        style({ height: '*', opacity: 1, offset: 1 }),
      ])),
      optional
    ),
    query(
      ':leave',
      animate('500ms ease', keyframes([
        style({ height: '*', opacity: 1, offset: 0 }),
        style({ height: '*', opacity: 0, offset: 0.5 }),
        style({ height: '0', opacity: 0, offset: 1 }),
      ])),
      optional
    )
  ];
}
