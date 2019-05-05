import { Component } from '@stencil/core';

@Component({
  tag: 'ad-transition-delay',
  styleUrl: 'transition-delay.css',
  shadow: true,
})
export class AdTransitionDelay {
  render() {
    return [
      <div>CSS Transition Delay</div>
    ]
  }
}
