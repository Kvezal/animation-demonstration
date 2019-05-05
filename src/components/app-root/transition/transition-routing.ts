import { AdRoute } from '../../common/interface/common.interface';

export const TransitionRouteList: AdRoute[] = [
  {
    name: 'transition-example-property',
    path: '/transition-example-property',
    component: 'ad-transition-property',
  },
  {
    name: 'transition-example-duration',
    path: '/transition-example-duration',
    component: 'ad-transition-duration',
  },
  {
    name: 'transition-example-timing-function',
    path: '/transition-example-timing-function',
    component: 'ad-transition-timing-function',
  },
  {
    name: 'transition-example-delay',
    path: '/transition-example-delay',
    component: 'ad-transition-delay',
  },
  {
    name: 'transition',
    path: '/transition-example',
    component: 'ad-transition-example',
  }
];
