import { AdRoute } from '../../common/interface/common.interface';

export const TransitionRouteList: AdRoute[] = [
  {
    name: 'transition-property',
    path: '/transition-property',
    component: 'ad-transition-property',
  },
  {
    name: 'transition-duration',
    path: '/transition-duration',
    component: 'ad-transition-duration',
  },
  {
    name: 'transition-timing-function',
    path: '/transition-timing-function',
    component: 'ad-transition-timing-function',
  },
  {
    name: 'transition-delay',
    path: '/transition-delay',
    component: 'ad-transition-delay',
  },
  {
    name: 'transition',
    path: '/transition-example',
    component: 'ad-transition-example',
  }
];
