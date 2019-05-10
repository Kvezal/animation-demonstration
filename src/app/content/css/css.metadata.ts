import { IRouterLink } from '../../common/interface/interface';

export const enum CssRouteList {
  DESCRIPTION = 'description',
  TRANSFORM = 'transform',
  TRANSITION = 'transition',
  EXAMPLE = 'example',
}

export const enum TransformRouteList {
  TRANSLATE = 'translate',
  SCALE = 'scale',
  ROTATE = 'rotate',
  SKEW = 'skew',
  ORIGIN = 'origin',
}

export const enum TransitionRouteList {
  PROPERTY = 'property',
  DURATION = 'duration',
  TIMING_FUNCTION = 'timing-function',
  DELAY = 'delay',
}

export const CssRouteLinkList: IRouterLink[] = [
  {
    path: [CssRouteList.DESCRIPTION],
    name: 'Описание',
  },
  {
    path: [CssRouteList.TRANSFORM],
    name: 'Трансформации',
    isShowChildren: false,
    children: [
      {path: [CssRouteList.TRANSFORM, TransformRouteList.TRANSLATE], name: 'Перемещение - translate()'},
      {path: [CssRouteList.TRANSFORM, TransformRouteList.SCALE], name: 'Масштабирование - scale()'},
      {path: [CssRouteList.TRANSFORM, TransformRouteList.ROTATE], name: 'Вращение - rotate()'},
      {path: [CssRouteList.TRANSFORM, TransformRouteList.SKEW], name: 'Наклон - skew()'},
      {path: [CssRouteList.TRANSFORM, TransformRouteList.ORIGIN], name: 'transform-origin'},
    ]
  },
  {
    path: [CssRouteList.TRANSITION],
    name: 'Переходы',
    isShowChildren: false,
    children: [
      {path: [CssRouteList.TRANSITION, TransitionRouteList.PROPERTY], name: 'transition-transition-property'},
      {path: [CssRouteList.TRANSITION, TransitionRouteList.DURATION], name: 'transition-transition-duration'},
      {path: [CssRouteList.TRANSITION, TransitionRouteList.TIMING_FUNCTION], name: 'transition-timing-function'},
      {path: [CssRouteList.TRANSITION, TransitionRouteList.DELAY], name: 'transition-delay'},
    ]
  },
  {
    path: [CssRouteList.EXAMPLE],
    name: 'Примеры',
  }
];
