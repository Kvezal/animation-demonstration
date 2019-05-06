import { Injectable } from '@angular/core';
import { IRouterLink } from '../interface/interface';

const enum RouteList {
  TRANSFORM = 'transform',
  TRANSITION = 'transition',
  CSS_ANIMATION = 'css-animation',
  SVG_ANIMATION = 'svg-animation',
  JS_ANIMATION = 'js-animation',
}

@Injectable()
export class PageService {
  public title = 'Page Title h2';

  public navigationList: IRouterLink[] = [];
}
