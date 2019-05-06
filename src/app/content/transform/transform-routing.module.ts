import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransformComponent } from './transform.component';
import { TranslateComponent } from './translate/translate.component';
import { ScaleComponent } from './scale/scale.component';
import { RotateComponent } from './rotate/rotate.component';
import { SkewComponent } from './skew/skew.component';

export const enum TransformRouteList {
  TRANSLATE = 'translate',
  SCALE = 'scale',
  ROTATE = 'rotate',
  SKEW = 'skew',
}

const routes: Routes = [
  {
    path: '',
    component: TransformComponent,
    children: [
      {
        path: TransformRouteList.TRANSLATE,
        component: TranslateComponent,
      },
      {
        path: TransformRouteList.SCALE,
        component: ScaleComponent,
      },
      {
        path: TransformRouteList.ROTATE,
        component: RotateComponent
      },
      {
        path: TransformRouteList.SKEW,
        component: SkewComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransformRoutingModule {}
