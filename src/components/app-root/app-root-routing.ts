import { AdRoute } from '../common/interface/common.interface';
import { TransitionRouteList } from './transition/transition-routing';

export const AppRootRouteList: AdRoute[] = [
  {
    name: 'CSS Переходы',
    path: '/css-transition',
    component: 'ad-transition',
    children: [...TransitionRouteList],
  },
  {
    name: 'CSS Анимации',
    path: '/css-animation',
    component: 'ad-css-animation',
  },
  {
    name: 'SVG',
    path: '/svg-animation',
    component: 'ad-svg-animation',
  },
  {
    name: 'JS Анимации',
    path: '/js-animation',
    component: 'ad-js-animation',
  },
];

export const AppRootSettingRouteList: AdRoute[] = [
  {
    name: 'CSS Переходы',
    path: '/settings',
    component: 'ad-settings',
  },
];
