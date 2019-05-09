import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CssComponent } from './css.component';
import { CssRouteList } from './css.metadata';

const routes: Routes = [
  {
    path: '',
    component: CssComponent,
    children: [
      {
        path: CssRouteList.TRANSFORM,
        loadChildren: './transform/transform.module#TransformModule',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CssRoutingModule {}
