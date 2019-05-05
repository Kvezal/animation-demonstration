import { Component } from '@stencil/core';

@Component({
  tag: 'ad-transition-timing-function',
  styleUrl: 'transition-example-timing-function.css',
  shadow: true,
})
export class AdTransitionTimingFunction {
  render() {
    return [
      <div>CSS Transition Timing Function</div>
    ]
  }
}