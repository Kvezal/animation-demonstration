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
}

export const enum TransitionRouteList {
  PROPERTY = 'property',
  DURATION = 'duration',
  TIMING_FUNCTION = 'timing-function',
  DELAY = 'delay',
}

export const CssRouteLinkList: IRouterLink[] = [
  {
    path: ['description'],
    name: 'Описание',
  },
  {
    path: ['transform'],
    name: 'Трансформации',
    isShowChildren: false,
    children: [
      {path: ['transform', 'translate'], name: 'Перемещение - translate()'},
      {path: ['transform', 'scale'], name: 'Масштабирование - scale()'},
      {path: ['transform', 'rotate'], name: 'Вращение - rotate()'},
      {path: ['transform', 'skew'], name: 'Наклон - skew()'},
      {path: ['transform', 'origin'], name: 'transform-origin'},
    ]
  },
  {
    path: ['transition'],
    name: 'Переходы',
    isShowChildren: false,
    children: [
      {path: ['transition', 'property'], name: 'transition-property'},
      {path: ['transition', 'duration'], name: 'transition-duration'},
      {path: ['transition', 'timing-function'], name: 'transition-timing-function'},
      {path: ['transition', 'delay'], name: 'transition-delay'},
    ]
  },
  {
    path: ['example'],
    name: 'Примеры',
  }
];
