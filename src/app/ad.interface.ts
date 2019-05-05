export const enum RouteList {
  TRANSFORM = 'transform',
  TRANSITION = 'transition',
  CSS_ANIMATION = 'css-animation',
  SVG_ANIMATION = 'svg-animation',
  JS_ANIMATION = 'js-animation',
}

export const adRouteLinkList: IRouterLink[] = [
  {path: [RouteList.TRANSFORM], name: 'Transform'},
  {path: [RouteList.TRANSITION], name: 'CSS Transition'},
  {path: [RouteList.CSS_ANIMATION], name: 'CSS Animation'},
  {path: [RouteList.SVG_ANIMATION], name: 'SVG Animation'},
  {path: [RouteList.JS_ANIMATION], name: 'JS Animation'},
];

export interface IRouterLink {
  path: string[];
  name: string;
}
