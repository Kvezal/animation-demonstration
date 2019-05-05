import { Component } from '@stencil/core';

@Component({
  tag: 'ad-transition-delay',
  styleUrl: 'transition-example-delay.css',
  shadow: true,
})
export class AdTransitionDelay {
  render() {
    return [
      <div>CSS Transition Delay</div>
    ]
  }
}
