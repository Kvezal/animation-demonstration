import { Component } from '@stencil/core';

@Component({
  tag: 'ad-transition-duration',
  styleUrl: 'transition-duration.css',
  shadow: true,
})
export class AdTransitionDuration {
  render() {
    return [
      <div>CSS Transition Duration</div>
    ]
  }
}
