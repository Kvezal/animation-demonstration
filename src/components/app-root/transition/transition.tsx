import { Component } from '@stencil/core';

import { TransitionRouteList } from './transition-routing';

@Component({
  tag: 'ad-transition',
  styleUrl: 'transition.css',
  shadow: true,
})
export class AdTransition {
  render() {
    return [
      <div>CSS Transition</div>,
      <ad-sidebar list={TransitionRouteList}></ad-sidebar>,
    ]
  }
}
