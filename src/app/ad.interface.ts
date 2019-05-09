import { IRouterLink } from './common/interface/interface';

// export const enum RouteList {
//   TRANSFORM = 'transform',
//   TRANSITION = 'transition',
//   CSS_ANIMATION = 'css-animation',
//   SVG_ANIMATION = 'svg-animation',
//   JS_ANIMATION = 'js-animation',
// }

// export const adRouteLinkList: IRouterLink[] = [
//   {path: [RouteList.TRANSFORM], name: 'Трансформации'},
//   {path: [RouteList.TRANSITION], name: 'CSS Переходы'},
//   {path: [RouteList.CSS_ANIMATION], name: 'CSS Анимации'},
//   {path: [RouteList.SVG_ANIMATION], name: 'Анимации c SVG'},
//   {path: [RouteList.JS_ANIMATION], name: 'JS Анимации'},
// ];

export const enum RouteList {
  CSS = 'css',
}

export const adRouteLinkList: IRouterLink[] = [
  {path: [RouteList.CSS], name: 'CSS Animations'},
];
