import { Component } from '@stencil/core';

@Component({
  tag: 'ad-transition-property',
  styleUrl: 'transition-example-timing-function.css',
  shadow: true,
})
export class AdTransitionProperty {
  render() {
    return [
      <div>CSS Transition Property</div>
    ]
  }
}
