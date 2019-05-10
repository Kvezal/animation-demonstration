import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CssComponent } from './css.component';
import { CssRouteList } from './css.metadata';
import {CssDescriptionComponent} from './css-description/css-description.component';
import {CssExampleComponent} from './css-example/css-example.component';

const routes: Routes = [
  {
    path: '',
    component: CssComponent,
    children: [
      {
        path: CssRouteList.DESCRIPTION,
        component: CssDescriptionComponent,
      },
      {
        path: CssRouteList.TRANSFORM,
        loadChildren: `./${CssRouteList.TRANSFORM}/${CssRouteList.TRANSFORM}.module#TransformModule`,
      },
      {
        path: CssRouteList.TRANSITION,
        loadChildren: `./${CssRouteList.TRANSITION}/${CssRouteList.TRANSITION}.module#TransitionModule`,
      },
      {
        path: CssRouteList.EXAMPLE,
        component: CssExampleComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CssRoutingModule {}
