import { Component } from '@stencil/core';

import { AppRootRouteList, AppRootSettingRouteList } from './app-root-routing';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
  private _routeList = [];

  render() {
    this.getChildrenRouteList([...AppRootRouteList, ...AppRootSettingRouteList]);
    console.log(this._routeList);

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
              {...this._routeList}
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }

  // private getChildrenRouteList(list) {
  //   if (!list) {
  //     return;
  //   }
  //   const routeList = list.map(item => {
  //     const childrenRouteList = this.getChildrenRouteList(item.children);
  //     if (!childrenRouteList) {
  //       return <stencil-route url={item.path} component={item.component}/>;
  //     }
  //     return [
  //       <stencil-route url={item.path} component={item.component}/>,
  //       ...childrenRouteList
  //     ];
  //   });
  //   return routeList;
  // }
  private getChildrenRouteList(list, parentPath = '') {
    if (!list) {
      return;
    }
    list.forEach(route => {
      route.path = `${parentPath}${route.path}`;
      this.getChildrenRouteList(route.children, route.path);
      const bn = <stencil-route url={route.path} component={route.component}/>;
      this._routeList.push(bn)
    });
  }
}
