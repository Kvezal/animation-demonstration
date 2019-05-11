import { IRouterLink } from './common/interface/interface';

export const enum RouteList {
  CSS = 'css',
  SVG_ANIMATION = 'svg',
  JS_ANIMATION = 'js',
}

export const adRouteLinkList: IRouterLink[] = [
  {path: [RouteList.CSS], name: 'CSS Animations'},
  {path: [RouteList.SVG_ANIMATION], name: 'SVG Animations'},
  {path: [RouteList.JS_ANIMATION], name: 'JS Animations'},
];
