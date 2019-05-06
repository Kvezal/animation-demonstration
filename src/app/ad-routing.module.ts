import { RouterModule, Routes } from '@angular/router';

import { RouteList } from './ad.interface';

const routes: Routes = [
  {
    path: RouteList.TRANSFORM,
    loadChildren: './content/transform/transform.module#TransformModule',
  },
  {
    path: RouteList.TRANSITION,
    loadChildren: './content/transition/transition.module#TransitionModule',
  },
  {
    path: RouteList.CSS_ANIMATION,
    loadChildren: './content/css-animation/css-animation.module#CssAnimationModule',
  },
  {
    path: RouteList.SVG_ANIMATION,
    loadChildren: './content/svg-animation/svg-animation.module#SvgAnimationModule',
  },
  {
    path: RouteList.JS_ANIMATION,
    loadChildren: './content/js-animation/js-animation.module#JsAnimationModule',
  },
];

export const AdRoutingModule = RouterModule.forRoot(routes);
