import { IRouterLink } from '../../common/interface/interface';

export const enum CssRouteList {
  DESCRIPTION = 'description',
  TRANSFORM = 'transform',
  TRANSITION = 'transition',
  ANIMATION = 'animation',
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

export const enum CssAnimationRouteList {
  KEYFRAMES = 'keyframes',
  NAME = 'name',
  DURATION = 'duration',
  TIMING_FUNCTION = 'timing-function',
  DELAY = 'delay',
  DIRECTION = 'direction',
  ITERATION_COUNT = 'iteration-count',
  FILL_MODE = 'fill-mode',
  PLAY_STATE = 'play-state',
  ANIMATION = 'animation',
  MANY = 'many',
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
    path: [CssRouteList.ANIMATION],
    name: 'Анимации',
    isShowChildren: false,
    children: [
      {path: [CssRouteList.ANIMATION, CssAnimationRouteList.KEYFRAMES], name: '@keyframes'},
      {path: [CssRouteList.ANIMATION, CssAnimationRouteList.NAME], name: 'animation-name'},
      {path: [CssRouteList.ANIMATION, CssAnimationRouteList.DURATION], name: 'animation-duration'},
      {path: [CssRouteList.ANIMATION, CssAnimationRouteList.TIMING_FUNCTION], name: 'animation-timing-function'},
      {path: [CssRouteList.ANIMATION, CssAnimationRouteList.DELAY], name: 'animation-delay'},
      {path: [CssRouteList.ANIMATION, CssAnimationRouteList.DIRECTION], name: 'animation-direction'},
      {path: [CssRouteList.ANIMATION, CssAnimationRouteList.ITERATION_COUNT], name: 'animation-iteration-count'},
      {path: [CssRouteList.ANIMATION, CssAnimationRouteList.FILL_MODE], name: 'animation-fill-mode'},
      {path: [CssRouteList.ANIMATION, CssAnimationRouteList.PLAY_STATE], name: 'animation-play-state'},
      {path: [CssRouteList.ANIMATION, CssAnimationRouteList.ANIMATION], name: 'animation'},
      {path: [CssRouteList.ANIMATION, CssAnimationRouteList.MANY], name: 'Множественные анимации'},
    ]
  },
  {
    path: [CssRouteList.EXAMPLE],
    name: 'Примеры',
  }
];
