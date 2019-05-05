import { Component } from '@stencil/core';
import { AppRootRouteList, AppRootSettingRouteList } from './app-root-routing';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
  render() {
    return (
      <div>
        <header class="ad-root-header">
          <h1 class="ad-root-header__title">Animation</h1>
          <nav class="ad-root-nav">
            <ul class="ad-root-nav__list">
              {AppRootRouteList.map(appRootRoute =>
                <li class="ad-root-nav__item">
                  <stencil-route-link
                    url={appRootRoute.path}
                    activeClass="ad-root-nav__link_active"
                    anchorClass="ad-root-nav__link"
                    anchorTabIndex="2">{appRootRoute.name}</stencil-route-link>
                </li>
              )}
            </ul>
          </nav>
          {/*<stencil-route-link
            class="ad-root-nav__link ad-root-nav__link_settings"
            url='/settings'
            activeClass="ad-root-nav__link_active"
            anchorClass="ad-root-nav__settings-link"
            anchorTabIndex="2"
          >*/}
          <stencil-route-link
            class="ad-root-setting"
            url='/settings'
            activeClass="ad-root-setting__link_active"
            anchorClass="ad-root-setting__link"
          >
            <ad-icon-settings class="ad-root-settings"/>
          </stencil-route-link>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              {AppRootRouteList.map(appRootRoute =>
                  <stencil-route url={appRootRoute.path} component={appRootRoute.component} />
              )}
              {AppRootSettingRouteList.map(appRootSettingRoute =>
                <stencil-route url={appRootSettingRoute.path} component={appRootSettingRoute.component} />
              )}
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
