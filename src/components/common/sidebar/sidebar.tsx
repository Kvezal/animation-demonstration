import { Component, Prop } from '@stencil/core';

import { AdRoute } from '../interface/common.interface';

@Component({
  tag: 'ad-sidebar',
  styleUrl: 'sidebar.css',
  shadow: true,
})
export class AdSidebar {
  @Prop() list: AdRoute[] = [];

  render() {
    return (
      <ul class="ad-sidebar__list">
        {this.list.map(item =>
          <li class="ad-sidebar__item">
            <stencil-route-link
              url={item.path}
              activeClass="ad-sidebar__link_active"
              anchorClass="ad-sidebar__link"
              anchorTabIndex="2">{item.name}</stencil-route-link>
          </li>
        )}
      </ul>

    )
  }
}
