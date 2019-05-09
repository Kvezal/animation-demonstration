import { RouterModule, Routes } from '@angular/router';

import { RouteList } from './ad.interface';

/*const routes: Routes = [
  {
    path: RouteList.TRANSFORM,
    loadChildren: './content/transform/transform.module#TransformModule',
    data: { animation: RouteList.TRANSFORM },
  },
  {
    path: RouteList.TRANSITION,
    loadChildren: './content/css/css.module#CssModule',
    data: { animation: RouteList.TRANSITION },
  },
  {
    path: RouteList.CSS_ANIMATION,
    loadChildren: './content/css-animation/css-animation.module#CssAnimationModule',
    data: { animation: RouteList.CSS_ANIMATION },
  },
  {
    path: RouteList.SVG_ANIMATION,
    loadChildren: './content/svg-animation/svg-animation.module#SvgAnimationModule',
    data: { animation: RouteList.SVG_ANIMATION },
  },
  {
    path: RouteList.JS_ANIMATION,
    loadChildren: './content/js-animation/js-animation.module#JsAnimationModule',
    data: { animation: RouteList.JS_ANIMATION },
  },
];*/

const routes: Routes = [
  {
    path: RouteList.CSS,
    loadChildren: './content/css/css.module#CssModule',
  },
];



export const AdRoutingModule = RouterModule.forRoot(routes);
