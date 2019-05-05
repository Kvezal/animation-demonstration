import { Component } from '@stencil/core';

@Component({
  tag: 'ad-transition',
  styleUrl: 'transition.css',
  shadow: true,
})
export class AdTransition {
  render() {
    return (
      <div>CSS Transition</div>
    )
  }
}
